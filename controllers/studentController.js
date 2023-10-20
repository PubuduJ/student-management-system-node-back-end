const {db} = require("../models/index");

const Student = db.students;

const createNewStudent = async (req, res) => {
    try {
        const availability = await Student.findByPk(req.body.nic);
        if (!availability) {
            const createdStudent = await Student.create(req.body);
            return res.status(201).json(createdStudent);
        } else {
            return res.status(404).json({message: "User already exit in the database"})
        }
    } catch (error) {
        return res.status(404).json({message: error.errors[0].message})
    }
}

const getStudentDetails = (req, res) => {
    res.send(req.params);
}

const updateStudent = (req, res) => {
    res.send(req.body);
}

const deleteStudent = (req, res) => {
    res.send(req.params);
}

const findStudents = (req, res) => {
    res.send(req.query);
}

module.exports = {createNewStudent,getStudentDetails,updateStudent,deleteStudent,findStudents}