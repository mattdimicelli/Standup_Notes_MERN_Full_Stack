const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: String,
    description: String,
    isActive: Boolean,
});

module.exports = mongoose.model('Project', projectSchema);