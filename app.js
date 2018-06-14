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
  users.addUser();

}
else if(command == 'remove'){
  users.removeUser();
}
else if(command == 'getall'){
  users.getAllUsers();
}
else{
  console.log('Command not recognized');
}
