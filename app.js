const chalk = require('chalk');
const { demandOption } = require('yargs');
const yargs = require('yargs')
const notes = require('./notes')

//! * add,remove,read,list

// todo:: Creating add command

yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
    }
})

// todo:: Creating remove command

yargs.command({
    command: 'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
       notes.removeNote(argv.title);
    }
})

// todo:: Creating list command

yargs.command({
    command: 'list',
    describe: 'list your node',
    handler: function(){
       notes.listNotes();
    }
})

// todo:: Creating read command

yargs.command({
    command: 'read',
    describe: 'read a node',
    builder: {
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
       notes.readNote(argv.title);
    }
})

yargs.parse() //todo: parsing the argument