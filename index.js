import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import studentsRoute from "./routes/students.js";
import schoolsRoute from "./routes/schools.js";
import teachersRoute from "./routes/teachers.js";

import cookieParser from "cookie-parser";

dotenv.config();
var app = express();

app.use(cookieParser());
app.use(express.json());

// Use the students router
app.use("/students", studentsRoute);

// Use the schools route
app.use("/schools", schoolsRoute);

// Use the teachers route
app.use("/teachers", teachersRoute);

async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.get("/", (_req, res) => {
  res.status(200).send("<b> Student Management API </b>");
});

app.listen(process.env.PORT, () =>
  console.log(`Connected to PORT ${process.env.PORT}`)
);
