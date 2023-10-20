const express = require("express");
const router = express.Router();
const {createNewStudent,getStudentDetails,updateStudent,deleteStudent,findStudents} = require("../controllers/studentController");

router.route("/").post(createNewStudent).get(findStudents);
router.route("/:id").get(getStudentDetails).patch(updateStudent).delete(deleteStudent);

module.exports = router;