import express from 'express';
import {
    getAllTeachers,
    getTeacher,
    addNewTeacher,
    deleteTeacher,
    updateTeacher,
} from '../controllers/teachers.controller.js';

var router = express.Router();

// Get all the schools
router.get("/", getAllTeachers);

// Get a single school with the given id
router.get("/:id", getTeacher);

// Add a new school
router.post("/", addNewTeacher);

// Delete a school
router.delete("/:id", deleteTeacher);

// Update a school
router.put("/:id", updateTeacher);

export default router;