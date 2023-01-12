import express from "express";
import Controller from "../controllers/index.js";
import middleware from "../middleware/index.js";

var router = express.Router();

// Delete a teacher
router.delete("/", middleware.tokenAuth, Controller.deleteTeacher);

// Update a teacher
router.put("/", middleware.tokenAuth, Controller.updateTeacher);

export default router;
