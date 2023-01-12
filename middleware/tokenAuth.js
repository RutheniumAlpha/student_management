import { verify } from "jsonwebtoken";

export default async (req, res, next) => {
  const token = req.cookies.access_token;

  // Check for token
  if (!token) {
    return res.status(401).json({
      errors: [
        {
          msg: "No token found",
        },
      ],
    });
  }

  try {
    const user = verify(token, process.env.JWT_SECRET);
    console.log(user.role, " == ", req.baseUrl);
    if (user.role == "student" && req.baseUrl == "/students") {
      req.userID = user.id;
      next();
    } else if (user.role == "teacher" && req.baseUrl == "/teachers") {
      req.userID = user.id;
      next();
    } else if (user.role == "school" && req.baseUrl == "/schools") {
      req.userID = user.id;
      next();
    } else {
      return res.status(404).json({
        errors: [
          {
            msg: "Request Denied",
          },
        ],
      });
    }
  } catch (error) {
    return res.status(400).json({
      errors: [
        {
          msg: "Invalid Token",
        },
      ],
    });
  }
};
