import Teachers from '../models/teachers.model.js';

export function getAllTeachers(_req, res) {
    try {
        Teachers.find((err, val) => {
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

export function getTeacher(req, res) {
    try {
        Teachers.find({ _id: req.params.id }, (err, val) => {
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

export function addNewTeacher(req, res) {
    try {
        const teacher = new Teachers(req.body);
        teacher.save().then(() => console.log(`Teacher ${req.body.name} added.`));

        // Return (200)
        res.status(200).send(teacher);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function deleteTeacher(req, res) {
    try {
        if (await Teachers.exists({ _id: req.params.id }) == null) {
            res.status(404).send("ID not found");
        } else {
            Teachers.deleteOne({ _id: req.params.id }, (error) => { if (error) return res.status(500).send(error) }).clone().then(() => {
                res.status(200).send("Deleted");
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function updateTeacher(req, res) {
    try {
        if (await Teachers.exists({ _id: req.params.id }) == null) {
            res.status(404).send("ID not found");
        } else {
            Teachers.updateOne({ _id: req.params.id }, req.body, (error) => { if (error) return res.status(500).send(error) }).clone().then(() => {
                res.status(200).send(req.body);
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}