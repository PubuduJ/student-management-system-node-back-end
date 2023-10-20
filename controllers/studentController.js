const {db} = require("../models/index");

const Student = db.students;

const createNewStudent = async (req, res) => {
    try {
        const createdStudent = await Student.create(req.body);
        res.status(201).json(createdStudent);
    } catch (error) {
        res.status(404).json({message: error})
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