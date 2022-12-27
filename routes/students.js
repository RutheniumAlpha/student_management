import express from "express";
import Controller from "../controllers/controller.js";
import { check } from "express-validator";
import middleware from "../middleware/middleware.js";

var router = express.Router();

// Get all the students
router.get("/", middleware.adminPassAuth, Controller.getAllStudents);

// Get a single student with the given id
router.get("/:id", middleware.adminPassAuth, Controller.getStudent);

// Add a new student
router.post("/", middleware.adminPassAuth, Controller.addNewStudent);

// Delete a student
router.delete("/:id", middleware.tokenAuth, Controller.deleteStudent);

// Update a student
router.put("/:id", middleware.tokenAuth, Controller.updateStudent);

// Register a student
router.post(
  "/register",
  [
    check("username", "Username must be greater than 4 characters.").isLength({
      min: 5,
    }),
    check("password", "Password must be greater than 7 characters.").isLength({
      min: 8,
    }),
  ],
  Controller.registerStudent
);

// Login as student
router.post("/login", Controller.loginStudent);

export default router;
