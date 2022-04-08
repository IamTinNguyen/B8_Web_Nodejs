const express = require('express')
const router = express.Router()
const {
    getStudents,
    setStudents,
    delStudents,
    updateStudents,
    getOneStudent
} = require('../controllers/studentControllers')


router.route('/')
    .get(getStudents)
    .post(setStudents)


router.route('/:id')
    .get(getOneStudent)
    .put(updateStudents)
    .delete(delStudents)

module.exports = router;