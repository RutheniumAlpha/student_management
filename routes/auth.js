import express from "express";
import Controller from "../controllers/index.js";

var router = express.Router();

// Register
router.post("/register", Controller.register);

// Login
router.post("/login", Controller.login);

export default router;
