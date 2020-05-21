const skillDB = require('../models/skill');
  
module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

  function index(req, res, next) {
    res.render('skills/index', {
      skills: skillDB.getAll()
    })
  }
 
  function show(req, res, next) {
    res.render('skills/show', {
      skill: skillDB.getOne(req.params.id),
      skillNum: skillDB.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
    })
  }

  function newSkill(req, res) {
    res.render('skills/new');
  }

  function create(req, res) {
    skillDB.create(req.body);
    res.redirect('/skills')
  }

  function deleteSkill(req, res) {
    skillDB.deleteOne(req.params.id);
    res.redirect('/skills');
  }

  function edit(req, res) {
    // Retrieve the skill being edited
    const skill = skillDB.getOne(req.params.id);
    res.render('skills/edit', {skill});
  }

  function update(req, res) {
    // If checked req.body.learned = 'yes'
    req.body.learned = !!req.body.learned;
    skillDB.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
  }
