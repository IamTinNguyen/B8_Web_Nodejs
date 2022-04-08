const asyncHandler = require('express-async-handler');
const Student = require('../models/studentModel');

// @desc    Get student
// @route   GET /api/students
// @access  Private
const getStudents = asyncHandler(async(req, res) => {
    const students = await Student.find({});

    res.status(200).json(students);
})

// @desc    Get student
// @route   GET /api/students
// @access  Private
const getOneStudent = asyncHandler(async(req, res) => {
    const id = req.params.id
    const students = await Student.findById(id);
    res.status(200).json(students);
})

// @desc    Set student
// @route   POST /api/students
// @access  Private
const setStudents = asyncHandler(async(req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const student = await Student.create({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        school: req.body.school,
        schoolID: req.body.schoolID,
        major: req.body.major,
    })

    res.status(200).json(student);
})

// @desc    Update student
// @route   PUT /api/students/:id
// @access  Private
const updateStudents = asyncHandler(async(req, res) => {
    const id = req.params.id
    const student = await Student.findById(id)
    if (!student) {
        res.status(400)
        throw new Error('Student not found!')
    }

    const updateStudent = await Student.findByIdAndUpdate(id, req.body, { new: true, })
    res.status(200).json(updateStudent);
})

// @desc    Delete student
// @route   DELETE /api/students/:id
// @access  Private
const delStudents = asyncHandler(async(req, res) => {
    const id = req.params.id
    const student = await Student.findById(id)
    if (!student) {
        res.status(400)
        throw new Error('Student not found!')
    }
    await student.remove();
    res.status(200).json({ id: id });
})

module.exports = {
    getStudents,
    setStudents,
    updateStudents,
    delStudents,
    getOneStudent
}