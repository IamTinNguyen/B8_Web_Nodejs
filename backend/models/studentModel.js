const mongoose = require('mongoose');
const schema = mongoose.Schema();
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name ']
    },
    age: {
        type: String,
        required: [true, 'Please add a age ']
    },
    gender: {
        type: String,
        required: [true, 'Please add a gender ']
    },
    school: {
        type: String,
        required: [true, 'Please add a school name ']
    },
    schoolID: {
        type: String,
        required: [true, 'Please add a school id ']
    },
    major: {
        type: String,
        required: [true, 'Please add a major ']
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Student', studentSchema);