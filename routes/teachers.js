import express from "express";
import Controller from "../controllers/index.js";
import middleware from "../middleware/index.js";

var router = express.Router();
// Get all the teachers
router.get("/", middleware.adminAuth, Controller.getAllTeachers);

// Get a single teacher with the given id
router.get("/:id", middleware.adminAuth, Controller.getTeacher);

// Add a new teacher
router.post("/", middleware.adminAuth, Controller.addNewTeacher);

// Delete a teacher
router.delete("/", middleware.tokenAuth, Controller.deleteTeacher);

// Update a teacher
router.put("/", middleware.tokenAuth, Controller.updateTeacher);

export default router;
