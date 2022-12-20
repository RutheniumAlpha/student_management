# Student Management

Manage the students and schools by using the following API.  
Access the API from [https://student-management.glitch.me/](https://student-management.glitch.me/)

# API Documentation

1. **`GET`** `/students/` List all the students.

2. **`GET`** `/students/:id` Get the details of a single student by ID.

3. **`POST`** `/students/` Add a new student.

4. **`PUT`** `/students/:id` Update an existing student.

5. **`DELETE`** `/students/:id` Delete an existing student.

---

6. **`GET`** `/teachers/` List all the teachers.

7. **`GET`** `/teachers/:id` Get the details of a single teacher by ID.

8. **`POST`** `/teachers/` Add a new teacher.

9. **`PUT`** `/teachers/:id` Update an existing teacher.

10. **`DELETE`** `/teachers/:id` Delete an existing teacher.

---

11. **`GET`** `/schools/` List all the schools.

12. **`GET`** `/schools/:id` Get the details of a single school by ID.

13. **`POST`** `/schools/` Add a new school.

14. **`PUT`** `/schools/:id` Update an existing school.

15. **`DELETE`** `/schools/:id` Delete an existing school.

16. **`POST`** `/schools/:id/class/` Add a new class to a school.

17. **`DELETE`** `/schools/:id/class/:classID` Remove a class from a school.

18. **`PUT`** `/schools/:id/class/:classID` Update a class of a school.

19. **`POST`** `/schools/:id/class/students/?studentID=&classID=` Add a new student to a class by Student ID.

20. **`DELETE`** `/schools/:id/class/students/?studentID=&classID=` Remove a existing student from a class by Student ID.

21. **`POST`** `/schools/:id/class/teachers/?teacherID=&classID=` Add a new teacher to a class by Teacher ID.

22. **`DELETE`** `/schools/:id/class/teachers/?teacherID=&classID=` Remove a existing teacher from a class by Teacher ID.
