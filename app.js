/*get data from another file(guestdb.js)
require("./guestdb.js");

console.log("hhgfa")*/

/*function exports from another file(guestdb.js)
const db=require("./guestdb")

console.log(db.add());
console.log(db.viwe());*/

/*import chalk from 'chalk';
console.log (process.argv);

console.log(chalk.blue.inverse('Hello world!'));*/

/*import { addGuest, updateGuest, deleteGuest, readGuest, listGuest } from './guestdb.js';

const command = process.argv;
if (command[2]==="add"){
    addGuest();
}
else if (command[2]==="update"){
    updateGuest();
}*/

/*const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// Print out the arguments
console.log(argv);*/

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addGuest, updateGuest, deleteGuest, readGuest, listGuest } from './guestdb.js';
const argv = yargs(hideBin(process.argv));

argv.command({
    command: 'add',
    describe: 'to add a user',
    builder:{
        name:{
        describe:"name",
        demandOption:true,
        type:"string"
             },
        address:{
        describe:"address",
        demandOption:true,
        type:"string"
            },
         age:{
        describe:"age",
        demandOption:true,
        type:"number"
             },
         date:{
         describe:"date",
        demandOption:true,
        type:"string"
                }
            },
    handler(argv) {
        addGuest(argv.name,argv.address,argv.age,argv.date);
       
    }
});
argv.command({
    command: 'update',
    describe: 'to update a user',
    builder:{
    id:{
        describe:"id",
        demandOption:true,
        type:"number"
    },
    name:{
        describe:"name",
        type:"string"
             },
     address:{
        describe:"address",
        type:"string"
             },
      age:{
        describe:"age",
          type:"number"
         },
     date:{
        describe:"date",
         type:"string"
            },  
      },
    handler: function(argv) {
        updateGuest(argv.id,argv.name,argv.address,argv.age,argv.date);
        }
     
});
argv.command({
    command: 'delete',
    describe: 'to delete a user',
    builder:{
    id:{
        describe:"id",
        demandOption:true,
        type:"number"
        }  
      },
    handler: function(argv) {
        deleteGuest(argv.id);
        }
     
});
argv.command({
    command: 'read',
    describe: 'to read a user',
    builder:{
    id:{
        describe:"id",
        demandOption:true,
        type:"number"
        } 
      },
    handler: function(argv) {
        readGuest(argv.id);
        }
     
});
argv.command({
    command: 'list',
    describe: 'to list viwe users',
    handler: function() {
        listGuest();
        }
     
});
// Parse the arguments
argv.parse();
