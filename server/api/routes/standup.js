const Standup = require('../../models/standup');
const mongoose = require('mongoose');

module.exports = router => {  
    // "router" is the express router from index.js of the api folder

    // GET: list of 12 newest standup meeting notes, in order from newest to oldest
    router.get('/standup', async (req, res) => {
        try {
            const sortedNotes = await Standup.find({}).sort({ 'createdOn': -1}).exec();
            res.status(200).json(sortedNotes);
        } 
        catch(err) {
            res.status(500).json({
                message: 'Unable to obtain the standup meeting notes',
                error: err,
            });
        }
    });

    //GET: the standup meeting notes from a specific team member per the team member ID
    router.get('/standup/:teamMemberId', async (req, res) => {
        const query = {
            _teamMemberId: mongoose.Types.ObjectId(req.params.teamMemberId),
            // this is "casting" the teamMemberId parameter as a "ObjectId type", which is the 
            // SchemaType that _teamMemberId has in Standup schema
        };

        try {
            const notes = await Standup.find(query).sort({'createdOn': -1}).exec();
            res.status(200).json(notes);
        }
        catch(err) {
            res.status(500).json({ message: 'Unable to obtain notes', error: err });
        }
    });

    // POST: save new standup note document
    router.post('/standup', (req, res) => {
        const note = new Standup(req.body);
        note.save((err, note) => {
            if (err) {
                return res.status(400).json(err);
            }
            else {
                res.status(200).json(note);
            }
        });
    });


}