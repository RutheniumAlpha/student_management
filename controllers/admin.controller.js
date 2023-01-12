import Students from "../models/students.model.js";
import Teachers from "../models/teachers.model.js";
import Schools from "../models/schools.model.js";
import Users from "../models/users.model.js";

export async function allData(_req, res) {
  try {
    var students = await Students.find();
    var teachers = await Teachers.find();
    var schools = await Schools.find();
    var users = await Users.find();
    res.status(200).json({
      users: users,
      students: students,
      teachers: teachers,
      schools: schools,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function getAllStudents(_req, res) {
  try {
    Students.find((err, val) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(val);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function getStudent(req, res) {
  try {
    Students.find({ _id: req.params.id }, (err, val) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(val);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function addNewStudent(req, res) {
  try {
    const student = new Students(req.body);
    await student
      .save()
      .then(() => console.log(`Student ${req.body.name} added.`));

    // Return (200)
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function getAllSchools(_req, res) {
  try {
    Schools.find((err, val) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(val);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function getSchool(req, res) {
  try {
    Schools.find({ _id: req.params.id }, (err, val) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(val);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function addNewSchool(req, res) {
  try {
    const school = new Schools(req.body);
    await school
      .save()
      .then(() => console.log(`School ${req.body.name} added.`));

    // Return (200)
    res.status(200).json(school);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function getAllTeachers(_req, res) {
  try {
    Teachers.find((err, val) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(val);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function getTeacher(req, res) {
  try {
    Teachers.find({ _id: req.params.id }, (err, val) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(val);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function addNewTeacher(req, res) {
  try {
    const teacher = new Teachers(req.body);
    await teacher
      .save()
      .then(() => console.log(`Teacher ${req.body.name} added.`));

    // Return (200)
    res.status(200).json(teacher);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
