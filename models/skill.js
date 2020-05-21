const skills = [
    {id: 1, skill: 'HTML', learned: true},
    {id: 2, skill: 'CSS', learned: true},
    {id: 3, skill: 'Javascript', learned: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.learned = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function update(id, skill) {
    const skillObj = skills.find(skill => skill.id === parseInt(id));
    Object.assign(skillObj, skill);
  }