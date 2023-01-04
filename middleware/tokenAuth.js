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
    req.userID = user.id;
    req.role = user.role;
    next();
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
