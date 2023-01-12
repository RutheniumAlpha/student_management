import {
  deleteSchool,
  updateSchool,
  addStudent,
  removeStudent,
  addTeacher,
  removeTeacher,
  addClass,
  removeClass,
  updateClass,
} from "./schools.controller.js";

import { deleteStudent, updateStudent } from "./students.controller.js";

import { deleteTeacher, updateTeacher } from "./teachers.controller.js";

import {
  addNewSchool,
  addNewStudent,
  addNewTeacher,
  getAllSchools,
  getAllStudents,
  getAllTeachers,
  getSchool,
  getTeacher,
  getStudent,
  allData,
} from "./admin.controller.js";

import { register, login } from "./auth.controller.js";

//Export all controller functions
export default {
  allData,
  getAllSchools,
  getSchool,
  addNewSchool,
  deleteSchool,
  updateSchool,
  addStudent,
  removeStudent,
  addTeacher,
  removeTeacher,
  addClass,
  removeClass,
  updateClass,
  getAllStudents,
  getStudent,
  addNewStudent,
  deleteStudent,
  updateStudent,
  getAllTeachers,
  getTeacher,
  addNewTeacher,
  deleteTeacher,
  updateTeacher,
  register,
  login,
};
