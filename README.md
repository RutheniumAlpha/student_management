# Student Management

Manage the students and schools by using the following API.

# API Documentation

<b>`GET`</b> `/student/` List all the students.<br><br>
<b>`GET`</b> `/students/:id` Get the details of a single student by ID.<br><br>
<b>`POST`</b> `/student/` Add a new student.<br><br>
<b>`PUT`</b> `/student/:id` Update an existing student.<br><br>
<b>`DELETE`</b> `/student/:id` Delete an existing student.
<br><br> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<br><br>
<b>`GET`</b> `/schools/` List all the schools.<br><br>
<b>`GET`</b> `/schools/:id` Get the details of a single school by ID.<br><br>
<b>`POST`</b> `/schools/` Add a new school.<br><br>
<b>`PUT`</b> `/schools/:id` Update an existing school.<br><br>
<b>`DELETE`</b> `/schools/:id` Delete an existing school.<br><br>
<b>`POST`</b> `/schools/:id/students/?studentID=` Add an existing student for a school. Give the Student ID as the query parameter<br><br>
<b>`DELETE`</b> `/schools/:id/students/?studentID=` Remove an existing student from a school. Give the Student ID as the query parameter<br><br>
