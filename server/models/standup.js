const mongoose = require('mongoose');

const standupSchema = new mongoose.Schema({
    _teamMemberId: { //when accessing this, you will need to query for _teamMemberId, since the value
        // is not user provided, rather it is provided by MongoDB
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teammembers',  // the name of the model to reference
    },  
    teamMember: { type: String },
    project: { type: String },
    workToday: { type: String },
    workYesterday: { type: String },
    impediment: { type: String }, 
    createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Standup', standupSchema);