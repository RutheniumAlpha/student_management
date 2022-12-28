import Teachers from "../models/teachers.model.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export async function getAllTeachers(_req, res) {
  try {
    Teachers.find((err, val) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(val);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function getTeacher(req, res) {
  try {
    Teachers.find({ _id: req.params.id }, (err, val) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(val);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function addNewTeacher(req, res) {
  try {
    const teacher = new Teachers(req.body);
    await teacher
      .save()
      .then(() => console.log(`Teacher ${req.body.name} added.`));

    // Return (200)
    res.status(200).send(teacher);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function deleteTeacher(req, res) {
  try {
    if ((await Teachers.exists({ _id: req.userID })) == null) {
      res.status(404).send("ID not found");
    } else {
      Teachers.deleteOne({ _id: req.userID }, (error) => {
        if (error) return res.status(500).send(error);
      })
        .clone()
        .then(() => {
          res.status(200).send("Deleted");
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function updateTeacher(req, res) {
  try {
    if ((await Teachers.exists({ _id: req.userID })) == null) {
      res.status(404).send("ID not found");
    } else {
      Teachers.updateOne({ _id: req.userID }, req.body, (error) => {
        if (error) return res.status(500).send(error);
      })
        .clone()
        .then(() => {
          res.status(200).send(req.body);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function registerTeacher(req, res) {
  try {
    const { username, password } = req.body;
    var body = req.body;

    // Body validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }

    // User already existing
    var exists = await Teachers.exists({ username: username });
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
    body["password"] = hashedPassword;
    const teacher = new Teachers(body);
    await teacher.save().then(() => console.log(body));

    // Return
    res.status(200).json(teacher);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function loginTeacher(req, res) {
  try {
    const { username, password } = req.body;

    // User existing
    var exists = await Teachers.exists({ username: username });
    if (!exists) {
      return res.status(422).json({
        errors: [
          {
            msg: "Invalid Credentials.",
          },
        ],
      });
    }
    var user = await Teachers.find({ _id: exists._id });

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

    // Create JWT token
    const token = JWT.sign(
      { id: user[0]._id, role: "teacher" },
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
      .json({ userID: user[0]._id });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
