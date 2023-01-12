import Teachers from "../models/teachers.model.js";

export async function deleteTeacher(req, res) {
  try {
    if ((await Teachers.exists({ _id: req.userID })) == null) {
      res.status(404).json({
        errors: [
          {
            msg: "ID not found.",
          },
        ],
      });
    } else {
      Teachers.deleteOne({ _id: req.userID }, (error) => {
        if (error) return res.status(500).json(error);
      })
        .clone()
        .then(() => {
          res.status(200).json({
            errors: [
              {
                msg: "Teacher deleted.",
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

export async function updateTeacher(req, res) {
  try {
    if ((await Teachers.exists({ _id: req.userID })) == null) {
      res.status(404).json({
        errors: [
          {
            msg: "ID not found.",
          },
        ],
      });
    } else {
      Teachers.updateOne({ _id: req.userID }, req.body, (error) => {
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
