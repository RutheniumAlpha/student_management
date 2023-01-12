import express from "express";
import Controller from "../controllers/index.js";
import middleware from "../middleware/index.js";

var router = express.Router();

// Overall database
router.get("/data", middleware.adminAuth, Controller.allData);

// Get all the students
router.get("/students", middleware.adminAuth, Controller.getAllStudents);

// Get a single student with the given id
router.get("/students/:id", middleware.adminAuth, Controller.getStudent);

// Add a new student
router.post("/students", middleware.adminAuth, Controller.addNewStudent);

// Get all the schools
router.get("/schools", middleware.adminAuth, Controller.getAllSchools);

// Get a single school with the given id
router.get("/schools/:id", middleware.adminAuth, Controller.getSchool);

// Add a new school
router.post("/schools", middleware.adminAuth, Controller.addNewSchool);

// Get all the teachers
router.get("/teachers", middleware.adminAuth, Controller.getAllTeachers);

// Get a single teacher with the given id
router.get("/teachers/:id", middleware.adminAuth, Controller.getTeacher);

// Add a new teacher
router.post("/teachers", middleware.adminAuth, Controller.addNewTeacher);

export default router;
