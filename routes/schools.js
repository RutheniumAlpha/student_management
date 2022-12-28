import express from "express";
import Controller from "../controllers/controller.js";
import { check } from "express-validator";
import middleware from "../middleware/middleware.js";

var router = express.Router();

// Get all the schools
router.get("/", middleware.adminAuth, Controller.getAllSchools);

// Get a single school with the given id
router.get("/:id", middleware.adminAuth, Controller.getSchool);

// Add a new school
router.post("/", middleware.adminAuth, Controller.addNewSchool);

// Delete a school
router.delete("/", middleware.schoolAuth, Controller.deleteSchool);

// Update a school
router.put("/", middleware.schoolAuth, Controller.updateSchool);

// Add student to a given class
router.post("/class/students/", middleware.schoolAuth, Controller.addStudent);

// Remove student from a given class
router.delete(
  "/class/students/",
  middleware.schoolAuth,
  Controller.removeStudent
);

// Add teacher to a given class
router.post("/class/teachers/", middleware.schoolAuth, Controller.addTeacher);

// Remove teacher from a given class
router.delete(
  "/class/teachers/",
  middleware.schoolAuth,
  Controller.removeTeacher
);

// Add class to a school
router.post("/class/", middleware.schoolAuth, Controller.addClass);

// Remove class from a school
router.delete("/class/:classID", middleware.schoolAuth, Controller.removeClass);

// Update a class
router.put("/class/:classID", middleware.schoolAuth, Controller.updateClass);

// Register a school
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
  Controller.registerSchool
);

// Login as school
router.post("/login", Controller.loginSchool);

export default router;
