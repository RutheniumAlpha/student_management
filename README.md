# Student Management

Manage the students and schools by using the following API.

# API Documentation

## Admin

- **`GET`** `admin/data/` Returns the whole database data.

- **`GET`** `admin/students/` List all the students.

- **`GET`** `admin/students/:id` Get the details of a single student by ID.

- **`POST`** `admin/students/` Add a new student.

- **`GET`** `admin/teachers/` List all the teachers.

- **`GET`** `admin/teachers/:id` Get the details of a single teacher by ID.

- **`POST`** `admin/teachers/` Add a new teacher.

- **`GET`** `admin/schools/` List all the schools.

- **`GET`** `admin/schools/:id` Get the details of a single school by ID.

- **`POST`** `admin/schools/` Add a new school.

## Authentication

- **`POST`** `/auth/register/` Register into the server

- **`POST`** `/auth/login/` Login into the server

## Students

- **`PUT`** `/students/` Update an existing student.

- **`DELETE`** `/students/` Delete an existing student.

## Teachers

- **`PUT`** `/teachers/` Update an existing teacher.

- **`DELETE`** `/teachers/` Delete an existing teacher.

## Schools

- **`PUT`** `/schools/` Update an existing school.

- **`DELETE`** `/schools/` Delete an existing school.

- **`POST`** `/schools/class/` Add a new class to a school.

- **`DELETE`** `/schools/class/:classID` Remove a class from a school.

- **`PUT`** `/schools/class/:classID` Update a class of a school.

- **`POST`** `/schools/class/students/?studentID=&classID=` Add a student to a class by Student ID.

- **`DELETE`** `/schools/class/students/?studentID=&classID=` Remove a student from a class by Student ID.

- **`POST`** `/schools/class/teachers/?teacherID=&classID=` Add a teacher to a class by Teacher ID.

- **`DELETE`** `/schools/class/teachers/?teacherID=&classID=` Remove a teacher from a class by Teacher ID.
