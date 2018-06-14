console.log('Starting Users.');

const fs = require('fs');

var addUser = (username, firstname, lastname, age, bloodgroup, emailId) => {
  console.log('User Added:');
  console.log('Username: ' + username);
  console.log('Firstname: ' + firstname);
  console.log('Lastname: ' + lastname);
  console.log('Age: ' + age);
  console.log('Bloodgroup: ' + bloodgroup);
  console.log('Email-Id: ' + emailId);
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
