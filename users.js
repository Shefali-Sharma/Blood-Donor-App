console.log('Starting Users.');

const fs = require('fs');

var saveUsers = (users) => {
  fs.writeFileSync('user-data.json', JSON.stringify(users))
};

var fetchUsers = () => {
  try{
    var usersString = fs.readFileSync('user-data.json');
    return JSON.parse(usersString);
  }
  catch(e){
    return [];
  }
};

var addUser = (username, firstname, lastname, age, bloodgroup, emailId) => {
  var users = fetchUsers();
  var user = {
    username,
    firstname,
    lastname,
    age,
    bloodgroup,
    emailId
  };

  var duplicateUsers = users.filter((user) => user.username == username);
  if(duplicateUsers.length == 0){
    users.push(user);
    saveUsers(users);
    return user;
  }
  else{
    console.log('User already exists.');
  }

  console.log('User Added:');
  console.log('Username: ' + username);
  console.log('Firstname: ' + firstname);
  console.log('Lastname: ' + lastname);
  console.log('Age: ' + age);
  console.log('Bloodgroup: ' + bloodgroup);
  console.log('Email-Id: ' + emailId);
};

var removeUser = (username) => {
  console.log('User removed: ' + username);
};

var getAllUsers = () => {
  console.log('Getting all users');
};

module.exports = {
  addUser,
  removeUser,
  getAllUsers
};
