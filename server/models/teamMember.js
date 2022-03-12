const mongoose = require('mongoose');

const teamMemberSchema = mongoose.Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model('TeamMember', teamMemberSchema, 'teammembers');