import express from "express";
import Controller from "../controllers/controller.js";
import { check } from "express-validator";
import middleware from "../middleware/middleware.js";

var router = express.Router();

// Get all the schools
router.get("/", middleware.adminPassAuth, Controller.getAllSchools);

// Get a single school with the given id
router.get("/:id", middleware.adminPassAuth, Controller.getSchool);

// Add a new school
router.post("/", middleware.adminPassAuth, Controller.addNewSchool);

// Delete a school
router.delete("/:id", middleware.tokenAuth, Controller.deleteSchool);

// Update a school
router.put("/:id", middleware.tokenAuth, Controller.updateSchool);

// Add student to a given class
router.post(
  "/:id/class/students/",
  middleware.tokenAuth,
  Controller.addStudent
);

// Remove student from a given class
router.delete(
  "/:id/class/students/",
  middleware.tokenAuth,
  Controller.removeStudent
);

// Add teacher to a given class
router.post(
  "/:id/class/teachers/",
  middleware.tokenAuth,
  Controller.addTeacher
);

// Remove teacher from a given class
router.delete(
  "/:id/class/teachers/",
  middleware.tokenAuth,
  Controller.removeTeacher
);

// Add class to a school
router.post("/:id/class/", middleware.tokenAuth, Controller.addClass);

// Remove class from a school
router.delete(
  "/:id/class/:classID",
  middleware.tokenAuth,
  Controller.removeClass
);

// Update a class
router.put("/:id/class/:classID", middleware.tokenAuth, Controller.updateClass);

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
