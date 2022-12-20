import express from 'express';
import Controller from '../controllers/controller.js';

var router = express.Router();

// Get all the students
router.get("/", Controller.getAllStudents);

// Get a single student with the given id
router.get("/:id", Controller.getStudent);

// Add a new student
router.post("/", Controller.addNewStudent);

// Delete a student
router.delete("/:id", Controller.deleteStudent);

// Update a student
router.put("/:id", Controller.updateStudent);

export default router;