import express from 'express';
import {
    getAllStudents,
    getStudent,
    addNewStudent,
    deleteStudent,
    updateStudent
} from '../controllers/students.controller.js';

var router = express.Router();

// Get all the students
router.get("/", getAllStudents);

// Get a single student with the given id
router.get("/:id", getStudent);

// Add a new student
router.post("/", addNewStudent);

// Delete a student
router.delete("/:id", deleteStudent);

// Update a student
router.put("/:id", updateStudent);

export default router;