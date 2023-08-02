const Model = require('./model');

function addUser(user) {
  const myUSer = new Model(user);
  return myUSer.save();
}

function getUsers() {
  return Model.find();
}

module.exports = {
  add: addUser,
  list: getUsers,
};
