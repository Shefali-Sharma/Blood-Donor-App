console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const users = require('./users.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command:', command);
console.log('Yargs:', argv);

if(command == 'add'){
  // node app.js add --username="shefali9222" --firstname="Shefali" --lastname="Sharma" --age=26 --bloodgroup="B+" --emailId="shefali92@gmail.com"
  users.addUser(argv.username, argv.firstname, argv.lastname, argv.age, argv.bloodgroup, argv.emailId);
}
else if(command == 'remove'){
  users.removeUser(argv.username);
}
else if(command == 'getuser'){
  var user = users.getUser(argv.username);
  if(user){
    console.log("User Found!");
    console.log('Username: ' + user.username);
    console.log('Firstname: ' + user.firstname);
    console.log('Lastname: ' + user.lastname);
    console.log('Age: ' + user.age);
    console.log('Bloodgroup: ' + user.bloodgroup);
    console.log('Email-Id: ' + user.emailId);
  }
}
else if(command == 'getall'){
  users.getAllUsers();
}
else{
  console.log('Command not recognized');
}
