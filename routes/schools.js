import express from 'express';
import {
    getAllSchools,
    getSchool,
    addNewSchool,
    deleteSchool,
    updateSchool,
    addStudent,
    removeStudent
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

// Add student to a given school
router.post("/:id/students/", addStudent);

// Remove student from a given school
router.delete("/:id/students/", removeStudent);

export default router;