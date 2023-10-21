const {db} = require("../models/index");

const Student = db.students;

const createNewStudent = async (req, res) => {
    try {
        const availability = await Student.findByPk(req.body.nic);
        if (!availability) {
            const createdStudent = await Student.create(req.body);
            return res.status(201).json(createdStudent);
        } else {
            return res.status(409).json({message: "User already exit in the database"})
        }
    } catch (error) {
        if (error.errors[0].message) {
            return res.status(404).json({message: error.errors[0].message})
        } else {
            console.log(error);
            return res.status(500).json({message: error})
        }
    }
}

const getStudentDetails = async (req, res) => {
    try {
        const id = req.params.nic;
        const student = await Student.findByPk(id);
        if (student) {
            return res.status(200).json(student);
        } else {
            return res.status(404).json({message: "Student doesn't exist"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error})
    }
}

const updateStudent = async (req, res) => {
    try {
        const id = req.params.nic;
        const student = await Student.findByPk(id);
        if (student) {
            await Student.update(req.body, {where: {nic: id}});
            return res.status(201).json(req.body);
        } else {
            return res.status(404).json({message: "Student doesn't exist"});
        }
    } catch (error) {
        if (error.errors[0].message) {
            return res.status(404).json({message: error.errors[0].message})
        } else {
            console.log(error);
            return res.status(500).json({message: error})
        }
    }
}

const deleteStudent = async (req, res) => {
    try {
        const id = req.params.nic;
        const student = await Student.findByPk(id);
        if (student) {
            await Student.destroy({where: {nic: id}});
            return res.status(204).json({});
        } else {
            return res.status(404).json({ message: "Student doesn't exist" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error});
    }
}

module.exports = {createNewStudent,getStudentDetails,updateStudent,deleteStudent}