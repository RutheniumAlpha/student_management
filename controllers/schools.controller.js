import Schools from "../models/schools.model.js";

export async function getAllSchools(_req, res) {
  try {
    Schools.find((err, val) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(val);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function getSchool(req, res) {
  try {
    Schools.find({ _id: req.params.id }, (err, val) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(val);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function addNewSchool(req, res) {
  try {
    const school = new Schools(req.body);
    await school
      .save()
      .then(() => console.log(`School ${req.body.name} added.`));

    // Return (200)
    res.status(200).send(school);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function deleteSchool(req, res) {
  if (req.role != "school") {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied",
        },
      ],
    });
  }
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).send("ID not found");
    } else {
      Schools.deleteOne({ _id: req.userID }, (error) => {
        if (error) return res.status(500).send(error);
      })
        .clone()
        .then(() => {
          res.status(200).send("Deleted");
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function updateSchool(req, res) {
  if (req.role != "school") {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied",
        },
      ],
    });
  }
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).send("ID not found");
    } else {
      Schools.updateOne({ _id: req.userID }, req.body, (error) => {
        if (error) return res.status(500).send(error);
      })
        .clone()
        .then(() => {
          res.status(200).send(req.body);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function addStudent(req, res) {
  if (req.role != "school") {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied",
        },
      ],
    });
  }
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).send("ID not found");
    } else {
      var classes = {};
      var classID = req.query.classID;
      var studentID = req.query.studentID;
      await Schools.findById(req.userID).then((val) => {
        classes = val.classes;
      });
      classes.get(classID).get("students").push(studentID);
      await Schools.updateOne(
        { _id: req.userID },
        { $set: { classes: classes } },
        (error) => {
          if (error) return res.status(500).send(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).send(`Student added`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function removeStudent(req, res) {
  if (req.role != "school") {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied",
        },
      ],
    });
  }
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).send("ID not found");
    } else {
      var classes = {};
      var classID = req.query.classID;
      var studentID = req.query.studentID;
      await Schools.findById(req.userID).then((val) => {
        classes = val.classes;
      });
      classes
        .get(classID)
        .get("students")
        .splice(classes.get(classID).get("students").indexOf(studentID), 1);
      await Schools.updateOne(
        { _id: req.userID },
        { $set: { classes: classes } },
        (error) => {
          if (error) return res.status(500).send(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).send(`Student removed`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function addTeacher(req, res) {
  if (req.role != "school") {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied",
        },
      ],
    });
  }
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).send("ID not found");
    } else {
      var classes = {};
      var classID = req.query.classID;
      var teacherID = req.query.teacherID;
      await Schools.findById(req.userID).then((val) => {
        classes = val.classes;
      });
      classes.get(classID).get("teachers").push(teacherID);
      await Schools.updateOne(
        { _id: req.userID },
        { $set: { classes: classes } },
        (error) => {
          if (error) return res.status(500).send(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).send(`Teacher added`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function removeTeacher(req, res) {
  if (req.role != "school") {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied",
        },
      ],
    });
  }
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).send("ID not found");
    } else {
      var classes = {};
      var classID = req.query.classID;
      var teacherID = req.query.teacherID;
      await Schools.findById(req.userID).then((val) => {
        classes = val.classes;
      });
      classes
        .get(classID)
        .get("teachers")
        .splice(classes.get(classID).get("teachers").indexOf(teacherID), 1);
      await Schools.updateOne(
        { _id: req.userID },
        { $set: { classes: classes } },
        (error) => {
          if (error) return res.status(500).send(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).send(`Teacher removed`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function addClass(req, res) {
  if (req.role != "school") {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied",
        },
      ],
    });
  }
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).send("ID not found");
    } else {
      var classes = {};
      await Schools.findById(req.userID).then((val) => {
        classes = val.classes;
      });
      console.log(typeof req.body);
      var body = {};
      body = req.body;
      if (!("students" in body)) {
        body["students"] = [];
      }
      if (!("teachers" in body)) {
        body["teachers"] = [];
      }
      var key = generateRandomKey(5);
      while (key in classes) {
        key = generateRandomKey(5);
      }
      classes.set(key, body);
      await Schools.updateOne(
        { _id: req.userID },
        { $set: { classes: classes } },
        (error) => {
          if (error) return res.status(500).send(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).send(`New class ${key}`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function updateClass(req, res) {
  if (req.role != "school") {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied",
        },
      ],
    });
  }
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).send("ID not found");
    } else {
      var classes = {};
      await Schools.findById(req.userID).then((val) => {
        classes = val.classes;
      });
      classes.set(req.params.classID, req.body);
      await Schools.updateOne(
        { _id: req.userID },
        { $set: { classes: classes } },
        (error) => {
          if (error) return res.status(500).send(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).send(`Updated class ${req.params.classID}`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function removeClass(req, res) {
  if (req.role != "school") {
    return res.status(404).json({
      errors: [
        {
          msg: "Access denied",
        },
      ],
    });
  }
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).send("ID not found");
    } else {
      var classes = {};
      await Schools.findById(req.userID).then((val) => {
        classes = val.classes;
      });
      classes.delete(req.params.classID);
      await Schools.updateOne(
        { _id: req.userID },
        { $set: { classes: classes } },
        (error) => {
          if (error) return res.status(500).send(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).send(`Deleted class ${req.params.classID}`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

function generateRandomKey(length) {
  const chars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  var key = "";
  for (let i = 0; i < length; i++) {
    key = key + chars[Math.floor(Math.random() * chars.length)];
  }
  console.log(key);
  return key;
}
