const Project = require('../../models/project');

module.exports = function(router) {  
    // "router" is the express router from index.js of the api folder

    // GET: list of only the active projects
    router.get('/projects', async (req, res) => {
        try {
            const activeProjects = await Project.find({ 'isActive': true }).sort({ 'name': 1 })
                                                                                        .exec();
            res.status(200).json(activeProjects);
        }
        catch(err) {
            res.status(500).json({ message: 'Unable to get active projects', error: err });
        }
    });

    // POST: save new standup note document
    router.post('/projects', (req, res) => {
        const project = new Project(req.body);
        project.save((err, project) => {
            if (err) {
                return res.status(400).json(err);
            }
            else {
                res.status(200).json(project);
            }
        });
    });
}