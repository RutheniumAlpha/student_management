import express from 'express';
import Controller from '../controllers/controller.js';

var router = express.Router();

// Get all the schools
router.get("/", Controller.getAllSchools);

// Get a single school with the given id
router.get("/:id", Controller.getSchool);

// Add a new school
router.post("/", Controller.addNewSchool);

// Delete a school
router.delete("/:id", Controller.deleteSchool);

// Update a school
router.put("/:id", Controller.updateSchool);

// Add student to a given class
router.post("/:id/class/students/", Controller.addStudent);

// Remove student from a given class
router.delete("/:id/class/students/", Controller.removeStudent);

// Add teacher to a given class
router.post("/:id/class/teachers/", Controller.addTeacher);

// Remove teacher from a given class
router.delete("/:id/class/teachers/", Controller.removeTeacher);

// Add class to a school
router.post("/:id/class/", Controller.addClass);

// Remove class from a school
router.delete("/:id/class/:classID", Controller.removeClass);

// Update a class
router.put("/:id/class/:classID", Controller.updateClass);

export default router;