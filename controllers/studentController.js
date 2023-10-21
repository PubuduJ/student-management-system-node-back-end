const {db} = require("../models/index");
const {ConflictError, NotFoundError} = require("../errors/error");

const Student = db.students;
const sequelize = db.sequelize;

const createNewStudent = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const availability = await Student.findByPk(req.body.nic);
        if (!availability) {
            const createdStudent = await Student.create(req.body);
            await t.commit();
            return res.status(201).json(createdStudent);
        }
        throw new ConflictError("User already exit in the database", 409);
    } catch (error) {
        await t.rollback();
        throw error;
    }
}

const getStudentDetails = async (req, res) => {
    const id = req.params.nic;
    const student = await Student.findByPk(id);
    if (student) return res.status(200).json(student);
    throw new NotFoundError("Student doesn't exist", 404);
}

const updateStudent = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const id = req.params.nic;
        const student = await Student.findByPk(id);
        if (student) {
            await Student.update(req.body, {where: {nic: id}});
            await t.commit();
            return res.status(201).json(req.body);
        }
        throw new NotFoundError("Student doesn't exist", 404);
    } catch (error) {
        await t.rollback();
        throw error;
    }
}

const deleteStudent = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const id = req.params.nic;
        const student = await Student.findByPk(id);
        if (student) {
            await Student.destroy({where: {nic: id}});
            await t.commit();
            return res.status(204).json({});
        }
        throw new NotFoundError("Student doesn't exist", 404);
    } catch (error) {
        await t.rollback();
        throw error;
    }
}

module.exports = {createNewStudent,getStudentDetails,updateStudent,deleteStudent}