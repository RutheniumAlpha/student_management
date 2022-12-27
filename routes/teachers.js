import express from "express";
import Controller from "../controllers/controller.js";
import { check } from "express-validator";
import middleware from "../middleware/middleware.js";

var router = express.Router();
// Get all the teachers
router.get("/", middleware.adminPassAuth, Controller.getAllTeachers);

// Get a single teacher with the given id
router.get("/:id", middleware.adminPassAuth, Controller.getTeacher);

// Add a new teacher
router.post("/", middleware.adminPassAuth, Controller.addNewTeacher);

// Delete a teacher
router.delete("/:id", middleware.tokenAuth, Controller.deleteTeacher);

// Update a teacher
router.put("/:id", middleware.tokenAuth, Controller.updateTeacher);

// Register a teacher
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
  Controller.registerTeacher
);

// Login as teacher
router.post("/login", Controller.loginTeacher);

export default router;
