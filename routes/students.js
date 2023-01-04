import express from "express";
import Controller from "../controllers/index.js";
import middleware from "../middleware/index.js";

var router = express.Router();

// Get all the students
router.get("/", middleware.adminAuth, Controller.getAllStudents);

// Get a single student with the given id
router.get("/:id", middleware.adminAuth, Controller.getStudent);

// Add a new student
router.post("/", middleware.adminAuth, Controller.addNewStudent);

// Delete a student
router.delete("/", middleware.tokenAuth, Controller.deleteStudent);

// Update a student
router.put("/", middleware.tokenAuth, Controller.updateStudent);

export default router;
