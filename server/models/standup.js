const mongoose = require('mongoose');

const noEmptyFieldValidator = [input => (input.trim().length) > 0, 'Do not leave {PATH} empty'];
// const noEmptyFieldValidator = [
//     function (val) {
//         let testVal = val.trim();
//         return (testVal.length > 0);
//     },
//     'Please supply a value for {PATH}'
// ]

const standupSchema = new mongoose.Schema({
    _teamMemberId: { //when accessing this, you will need to query for _teamMemberId, since the value
        // is not user provided, rather it is provided by MongoDB
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teammembers',  // the name of the model to reference
    },  
    teamMember: { type: String, required: true, validate: noEmptyFieldValidator },
    project: { type: String, required: true, validate: noEmptyFieldValidator },
    workToday: { type: String, required: true, validate: noEmptyFieldValidator },
    workYesterday: { type: String, required: true, validate: noEmptyFieldValidator },
    impediment: { type: String, required: true }, 
    createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Standup', standupSchema);