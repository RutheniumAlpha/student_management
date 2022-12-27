import { verify } from "jsonwebtoken";

export default async (req, res, next) => {
  const token = req.header("x-auth-token");

  // Check for token
  if (!token) {
    res.status(401).json({
      errors: [
        {
          msg: "No token found",
        },
      ],
    });
  }

  try {
    const user = verify(token, process.env.JWT_SECRET);
    if (user.role === "student") {
      next();
    } else {
      res.status(400).json({
        errors: [
          {
            msg: "Invalid Token",
          },
        ],
      });
    }
  } catch (error) {
    res.status(400).json({
      errors: [
        {
          msg: "Invalid Token",
        },
      ],
    });
  }
};
