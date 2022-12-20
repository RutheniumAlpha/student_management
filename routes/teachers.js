import express from 'express';
import Controller from '../controllers/controller.js';

var router = express.Router();
// Get all the schools
router.get("/", Controller.getAllTeachers);

// Get a single school with the given id
router.get("/:id", Controller.getTeacher);

// Add a new school
router.post("/", Controller.addNewTeacher);

// Delete a school
router.delete("/:id", Controller.deleteTeacher);

// Update a school
router.put("/:id", Controller.updateTeacher);

export default router;