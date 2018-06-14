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
  console.log('Add a user');
}
else if(command == 'remove'){
  console.log('Remove a user');
}
else if(command == 'getall'){
  console.log('Getting all users');
}
else{
  console.log('Command not recognized');
}
