const fs = require('fs')
const chalk = require('chalk')
const notes = require('./notes')
const yargs = require('yargs')

yargs.version('1.1.0')

//Create add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removeing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNoe(argv.title)
    }
})
//Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})
//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})
//add, remove, read ,list
yargs.parse()
//console.log(yargs.argv)