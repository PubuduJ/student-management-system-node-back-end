const express = require("express");
const {createNewStudent,getStudentDetails,updateStudent,deleteStudent,findStudents} = require("../controllers/studentController");
const router = express.Router();

router.route("/").post(createNewStudent).get(findStudents);
router.route("/:id").get(getStudentDetails).patch(updateStudent).delete(deleteStudent);

module.exports = router;