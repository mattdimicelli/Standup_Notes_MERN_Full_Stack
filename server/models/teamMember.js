const mongoose = require('mongoose');

const teamMemberSchema = mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('TeamMember', teamMemberSchema, 'teammembers');