import {
    getAllSchools, getSchool, addNewSchool, deleteSchool, updateSchool, addStudent, removeStudent, addTeacher, removeTeacher, addClass, removeClass, updateClass
} from './schools.controller.js';

import {
    getAllStudents, getStudent, addNewStudent, deleteStudent, updateStudent
} from './students.controller.js';

import {
    getAllTeachers, getTeacher, addNewTeacher, deleteTeacher, updateTeacher
} from './teachers.controller.js';

//Export all controller functions
export default {
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
    updateTeacher
};