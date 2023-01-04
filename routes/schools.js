import express from "express";
import Controller from "../controllers/index.js";
import middleware from "../middleware/index.js";

var router = express.Router();

// Get all the schools
router.get("/", middleware.adminAuth, Controller.getAllSchools);

// Get a single school with the given id
router.get("/:id", middleware.adminAuth, Controller.getSchool);

// Add a new school
router.post("/", middleware.adminAuth, Controller.addNewSchool);

// Delete a school
router.delete("/", middleware.tokenAuth, Controller.deleteSchool);

// Update a school
router.put("/", middleware.tokenAuth, Controller.updateSchool);

// Add student to a given class
router.post("/class/students/", middleware.tokenAuth, Controller.addStudent);

// Remove student from a given class
router.delete(
  "/class/students/",
  middleware.tokenAuth,
  Controller.removeStudent
);

// Add teacher to a given class
router.post("/class/teachers/", middleware.tokenAuth, Controller.addTeacher);

// Remove teacher from a given class
router.delete(
  "/class/teachers/",
  middleware.tokenAuth,
  Controller.removeTeacher
);

// Add class to a school
router.post("/class/", middleware.tokenAuth, Controller.addClass);

// Remove class from a school
router.delete("/class/:classID", middleware.tokenAuth, Controller.removeClass);

// Update a class
router.put("/class/:classID", middleware.tokenAuth, Controller.updateClass);

export default router;
