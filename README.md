# Student Management

Manage the students and schools by using the following API.  
Access the API from [https://student-management.glitch.me/](https://student-management.glitch.me/)

# API Documentation

- **`POST`** `/auth/register/` Register into the server

- **`POST`** `/auth/login/` Login into the server

---

- **`GET`** `/students/` List all the students.

- **`GET`** `/students/:id` Get the details of a single student by ID.

- **`POST`** `/students/` Add a new student.

- **`PUT`** `/students/` Update an existing student.

- **`DELETE`** `/students/` Delete an existing student.

---

- **`GET`** `/teachers/` List all the teachers.

- **`GET`** `/teachers/:id` Get the details of a single teacher by ID.

- **`POST`** `/teachers/` Add a new teacher.

- **`PUT`** `/teachers/` Update an existing teacher.

- **`DELETE`** `/teachers/` Delete an existing teacher.

---

- **`GET`** `/schools/` List all the schools.

- **`GET`** `/schools/:id` Get the details of a single school by ID.

- **`POST`** `/schools/` Add a new school.

- **`PUT`** `/schools/` Update an existing school.

- **`DELETE`** `/schools/` Delete an existing school.

- **`POST`** `/schools/class/` Add a new class to a school.

- **`DELETE`** `/schools/class/:classID` Remove a class from a school.

- **`PUT`** `/schools/class/:classID` Update a class of a school.

- **`POST`** `/schools/class/students/?studentID=&classID=` Add a student to a class by Student ID.

- **`DELETE`** `/schools/class/students/?studentID=&classID=` Remove a student from a class by Student ID.

- **`POST`** `/schools/class/teachers/?teacherID=&classID=` Add a teacher to a class by Teacher ID.

- **`DELETE`** `/schools/class/teachers/?teacherID=&classID=` Remove a teacher from a class by Teacher ID.
