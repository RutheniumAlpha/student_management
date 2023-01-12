import Schools from "../models/schools.model.js";

export async function deleteSchool(req, res) {
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).json("ID not found");
    } else {
      Schools.deleteOne({ _id: req.userID }, (error) => {
        if (error) return res.status(500).json(error);
      })
        .clone()
        .then(() => {
          res.status(200).json("Deleted");
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function updateSchool(req, res) {
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).json("ID not found");
    } else {
      Schools.updateOne({ _id: req.userID }, req.body, (error) => {
        if (error) return res.status(500).json(error);
      })
        .clone()
        .then(() => {
          res.status(200).json(req.body);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function addStudent(req, res) {
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).json("ID not found");
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
          if (error) return res.status(500).json(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).json(`Student added`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function removeStudent(req, res) {
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).json("ID not found");
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
          if (error) return res.status(500).json(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).json(`Student removed`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function addTeacher(req, res) {
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).json("ID not found");
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
          if (error) return res.status(500).json(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).json(`Teacher added`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function removeTeacher(req, res) {
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).json("ID not found");
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
          if (error) return res.status(500).json(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).json(`Teacher removed`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function addClass(req, res) {
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).json("ID not found");
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
          if (error) return res.status(500).json(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).json(`New class ${key}`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function updateClass(req, res) {
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).json("ID not found");
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
          if (error) return res.status(500).json(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).json(`Updated class ${req.params.classID}`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function removeClass(req, res) {
  try {
    if ((await Schools.exists({ _id: req.userID })) == null) {
      res.status(404).json("ID not found");
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
          if (error) return res.status(500).json(error);
        }
      )
        .clone()
        .then(() => {
          res.status(200).json(`Deleted class ${req.params.classID}`);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
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
