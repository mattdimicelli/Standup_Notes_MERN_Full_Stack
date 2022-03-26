const TeamMember = require('../../models/teamMember');

module.exports = function(router) {  
    // "router" is the express router from index.js of the api folder

    // GET: list of team members
    router.get('/team', async (req, res) => {
        try {
            const teamMembers = await TeamMember.find({}).sort({ 'name': 1 }).exec();
            res.status(200).json(teamMembers);
        }
        catch(err) {
            res.status(500).json({ message: 'Unable to get team members', error: err });
        }
    });

    // POST: save new team member document
    router.post('/team', (req, res) => {
        const teamMember = new TeamMember(req.body);
        teamMember.save((err, teamMember) => {
            if (err) {
                return res.status(400).json(err);
            }
            else {
                res.status(200).json(teamMember);
            }
        });
    });
}