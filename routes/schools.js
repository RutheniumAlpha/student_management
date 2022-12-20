import express from 'express';
import {
    getAllSchools,
    getSchool,
    addNewSchool,
    deleteSchool,
    updateSchool,
    addStudent,
    removeStudent,
    addTeacher,
    removeTeacher,
    addClass,
    removeClass,
    updateClass
} from '../controllers/schools.controller.js';

var router = express.Router();

// Get all the schools
router.get("/", getAllSchools);

// Get a single school with the given id
router.get("/:id", getSchool);

// Add a new school
router.post("/", addNewSchool);

// Delete a school
router.delete("/:id", deleteSchool);

// Update a school
router.put("/:id", updateSchool);

// Add student to a given class
router.post("/:id/class/students/", addStudent);

// Remove student from a given class
router.delete("/:id/class/students/", removeStudent);

// Add teacher to a given class
router.post("/:id/class/teachers/", addTeacher);

// Remove teacher from a given class
router.delete("/:id/class/teachers/", removeTeacher);

// Add class to a school
router.post("/:id/class/", addClass);

// Remove class from a school
router.delete("/:id/class/:classID", removeClass);

// Update a class
router.put("/:id/class/:classID", updateClass);

export default router;