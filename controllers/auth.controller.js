import Students from "../models/students.model.js";
import Teachers from "../models/teachers.model.js";
import Schools from "../models/schools.model.js";
import Users from "../models/users.model.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export async function register(req, res) {
  try {
    const { username, password } = req.body;

    // Body validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }

    // User already existing
    var exists = await Users.exists({ username: username });
    if (exists) {
      return res.status(422).json({
        errors: [
          {
            msg: "The username already exists.",
            param: "username",
            location: "body",
          },
        ],
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add user to database
    var user = new Users({
      username: username,
      password: hashedPassword,
      role: req.body["role"],
      name: req.body["name"],
    });
    const formattedBody = req.body;
    delete formattedBody["username"];
    delete formattedBody["password"];
    delete formattedBody["role"];
    delete formattedBody["name"];
    formattedBody["userCollectionID"] = user.id;
    var userData;
    switch (user.role) {
      case "student":
        userData = new Students(formattedBody);
        break;
      case "teacher":
        userData = new Teachers(formattedBody);
        break;
      case "school":
        userData = new Schools(formattedBody);
        break;
      default:
        break;
    }
    await user.save();
    await userData.save();

    let printData = user.toObject();

    delete printData["password"];

    // Return
    res.status(200).json(printData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;

    // User existing
    var exists = await Users.exists({
      username: username,
    });
    if (!exists) {
      return res.status(422).json({
        errors: [
          {
            msg: "Invalid Credentials.",
          },
        ],
      });
    }
    var user = await Users.find({ _id: exists._id });
    var userRole = user[0].role;

    // Verify the password
    let isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res.status(422).json({
        errors: [
          {
            msg: "Invalid Credentials.",
          },
        ],
      });
    }
    var dbID = "";
    switch (userRole) {
      case "student":
        await Students.find({ userCollectionID: user[0].id }).then((val) => {
          if (val.length != 0) {
            dbID = val[0].id;
          }
        });
        break;
      case "school":
        await Schools.find({ userCollectionID: user[0].id }).then((val) => {
          if (val.length != 0) {
            dbID = val[0].id;
          }
        });
        break;
      case "teacher":
        await Teachers.find({ userCollectionID: user[0].id }).then((val) => {
          if (val.length != 0) {
            dbID = val[0].id;
          }
        });
        break;

      default:
        break;
    }
    if (dbID == "") {
      return res.status(422).json({
        errors: [
          {
            msg: "Invalid Type",
          },
        ],
      });
    }
    // Create JWT token
    const token = JWT.sign(
      { id: dbID, role: userRole },
      process.env.JWT_SECRET,
      {
        expiresIn: 259200,
      }
    );

    // Store in cookie
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ userID: user[0]._id, dbID: dbID });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
