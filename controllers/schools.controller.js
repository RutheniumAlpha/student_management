import Schools from '../models/schools.model.js';

export function getAllSchools(_req, res) {
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

export function getSchool(req, res) {
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

export function addNewSchool(req, res) {
    try {
        const school = new Schools(req.body);
        school.save().then(() => console.log(`School ${req.body.name} added.`));

        // Return (200)
        res.status(200).send(school);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function deleteSchool(req, res) {
    try {
        if (await Schools.exists({ _id: req.params.id }) == null) {
            res.status(404).send("ID not found");
        } else {
            Schools.deleteOne({ _id: req.params.id }, (error) => { if (error) return res.status(500).send(error) }).clone().then(() => {
                res.status(200).send("Deleted");
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function updateSchool(req, res) {
    try {
        if (await Schools.exists({ _id: req.params.id }) == null) {
            res.status(404).send("ID not found");
        } else {
            Schools.updateOne({ _id: req.params.id }, req.body, (error) => { if (error) return res.status(500).send(error) }).clone().then(() => {
                res.status(200).send(req.body);
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function addStudent(req, res) {
    try {
        if (await Schools.exists({ _id: req.params.id }) == null) {
            res.status(404).send("ID not found");
        } else {
            var students = [];
            await Schools.findById(req.params.id).then((val) => {
                students = val.students;
            });
            students.push(req.query.studentID);
            await Schools.updateOne({ _id: req.params.id }, { $set: { 'students': students } }, (error) => { if (error) return res.status(500).send(error) }).clone().then(() => {
                res.status(200).send(students);
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function removeStudent(req, res) {
    try {
        if (await Schools.exists({ _id: req.params.id }) == null) {
            res.status(404).send("ID not found");
        } else {
            var students = [];
            await Schools.findById(req.params.id).then((val) => {
                students = val.students;
            });
            console.log(students.splice(students.indexOf(req.query.studentID), 1));

            await Schools.updateOne({ _id: req.params.id }, { $set: { 'students': students } }, (error) => { if (error) return res.status(500).send(error) }).clone().then(() => {
                res.status(200).send(students);
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}