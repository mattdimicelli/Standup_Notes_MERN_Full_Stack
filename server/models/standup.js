const mongoose = require('mongoose');

const noEmptyFieldValidator = [input => input.trim().length > 0, 'Do not leave {PATH} empty'];
const sizeValidator = [
    input => input.trim().length > 0 && input.trim().length <50,
    'Do not leave {PATH} empty'
];

const standupSchema = new mongoose.Schema({
    _teamMemberId: { //when accessing this, you will need to query for _teamMemberId, since the value
        // is not user provided, rather it is provided by MongoDB
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teammembers',  // the name of the model to reference
    },  
    teamMember: { type: String, required: true, validator: sizeValidator },
    project: { type: String, required: true, validator: noEmptyFieldValidator },
    workToday: { type: String, required: true, validator: noEmptyFieldValidator },
    workYesterday: { type: String, required: true, validator: noEmptyFieldValidator },
    impediment: { type: String, required: true, validator: noEmptyFieldValidator }, 
    createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Standup', standupSchema);