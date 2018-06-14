console.log('Starting Users.');

const fs = require('fs');

var addUser = (username, firstname, lastname, age, bloodgroup, emailId) => {
  console.log('Adding a user');
};

var removeUser = () => {
  console.log('Removing a user');
};

var getAllUsers = () => {
  console.log('Getting all users');
};

module.exports = {
  addUser,
  removeUser,
  getAllUsers
};
