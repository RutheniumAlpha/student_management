import Students from "../models/students.model.js";

export async function deleteStudent(req, res) {
  try {
    if ((await Students.exists({ _id: req.userID })) == null) {
      res.status(404).json({
        errors: [
          {
            msg: "ID not found.",
          },
        ],
      });
    } else {
      Students.deleteOne({ _id: req.userID }, (error) => {
        if (error) return res.status(500).json(error);
      })
        .clone()
        .then(() => {
          res.status(200).json({
            errors: [
              {
                msg: "Student Deleted.",
              },
            ],
          });
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function updateStudent(req, res) {
  try {
    console.log(req.userID);
    if ((await Students.exists({ _id: req.userID })) == null) {
      res.status(404).json({
        errors: [
          {
            msg: "ID not found.",
          },
        ],
      });
    } else {
      Students.updateOne({ _id: req.userID }, req.body, (error) => {
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
