import Students from '../models/students.model.js';

export async function getAllStudents(_req, res) {
    try {
        Students.find((err, val) => {
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

export async function getStudent(req, res) {
    try {
        Students.find({ _id: req.params.id }, (err, val) => {
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

export async function addNewStudent(req, res) {
    try {
        const student = new Students(req.body);
        await student.save().then(() => console.log(`Student ${req.body.name} added.`));

        // Return (200)
        res.status(200).send(student);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function deleteStudent(req, res) {
    try {
        if (await Students.exists({ _id: req.params.id }) == null) {
            res.status(404).send("ID not found");
        } else {
            Students.deleteOne({ _id: req.params.id }, (error) => { if (error) return res.status(500).send(error) }).clone().then(() => {
                res.status(200).send("Deleted");
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function updateStudent(req, res) {
    try {
        if (await Students.exists({ _id: req.params.id }) == null) {
            res.status(404).send("ID not found");
        } else {
            Students.updateOne({ _id: req.params.id }, req.body, (error) => { if (error) return res.status(500).send(error) }).clone().then(() => {
                res.status(200).send(req.body);
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}