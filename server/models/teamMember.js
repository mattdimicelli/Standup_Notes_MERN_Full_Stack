const mongoose = require('mongoose');

const sizeValidator = [
    input => input.trim().length > 0 && input.trim().length <50,
    '{PATH} must be greater than zero characters and less than 50 '
];

const teamMemberSchema = mongoose.Schema({
    name: { type: String, required: true, validate: sizeValidator },
});

module.exports = mongoose.model('TeamMember', teamMemberSchema, 'teammembers');