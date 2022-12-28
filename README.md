# Student Management

Manage the students and schools by using the following API.  
Access the API from [https://student-management.glitch.me/](https://student-management.glitch.me/)

# API Documentation

1. **`GET`** `/students/` List all the students.

2. **`GET`** `/students/:id` Get the details of a single student by ID.

3. **`POST`** `/students/` Add a new student.

4. **`PUT`** `/students/` Update an existing student.

5. **`DELETE`** `/students/` Delete an existing student.

6. **`POST`** `/students/register/` Register a student.

7. **`POST`** `/students/login/` Login as an student.

---

8. **`GET`** `/teachers/` List all the teachers.

9. **`GET`** `/teachers/:id` Get the details of a single teacher by ID.

10. **`POST`** `/teachers/` Add a new teacher.

11. **`PUT`** `/teachers/` Update an existing teacher.

12. **`DELETE`** `/teachers/` Delete an existing teacher.

13. **`POST`** `/teachers/register/` Register a teacher.

14. **`POST`** `/teachers/login/` Login as an teacher.

---

15. **`GET`** `/schools/` List all the schools.

16. **`GET`** `/schools/:id` Get the details of a single school by ID.

17. **`POST`** `/schools/` Add a new school.

18. **`PUT`** `/schools/` Update an existing school.

19. **`DELETE`** `/schools/` Delete an existing school.

20. **`POST`** `/schools/class/` Add a new class to a school.

21. **`DELETE`** `/schools/class/:classID` Remove a class from a school.

22. **`PUT`** `/schools/class/:classID` Update a class of a school.

23. **`POST`** `/schools/class/students/?studentID=&classID=` Add a student to a class by Student ID.

24. **`DELETE`** `/schools/class/students/?studentID=&classID=` Remove a student from a class by Student ID.

25. **`POST`** `/schools/class/teachers/?teacherID=&classID=` Add a teacher to a class by Teacher ID.

26. **`DELETE`** `/schools/class/teachers/?teacherID=&classID=` Remove a teacher from a class by Teacher ID.

27. **`POST`** `/schools/register/` Register a school.

28. **`POST`** `/schools/login/` Login as an school.
