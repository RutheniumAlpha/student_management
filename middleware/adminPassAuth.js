export default async (req, res, next) => {
  const pass = req.header("admin-pass");

  // Check for pass
  if (!pass) {
    return res.status(401).json({
      errors: [
        {
          msg: "No pass found",
        },
      ],
    });
  }

  if (pass == process.env.ADMIN_PASS) {
    next();
  } else {
    return res.status(400).json({
      errors: [
        {
          msg: "Invalid pass",
        },
      ],
    });
  }
};
