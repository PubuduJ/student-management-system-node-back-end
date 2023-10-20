const createNewStudent = (req, res) => {
    res.send(req.body);
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