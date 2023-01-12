import express from "express";
import Controller from "../controllers/index.js";
import middleware from "../middleware/index.js";

var router = express.Router();

// Delete a student
router.delete("/", middleware.tokenAuth, Controller.deleteStudent);

// Update a student
router.put("/", middleware.tokenAuth, Controller.updateStudent);

export default router;
