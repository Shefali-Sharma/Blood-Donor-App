console.log('Starting Users.');

const fs = require('fs');

var addUser = () => {
  console.log('Add a user');
};

var removeUser = () => {
  console.log('Remove a user');
};

var getAllUsers = () => {
  console.log('Getting all users');
};

module.exports = {
  addUser,
  removeUser,
  getAllUsers
};
