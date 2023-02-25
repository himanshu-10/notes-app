const fs = require('fs');
const chalk = require('chalk')

const getNotes = function(){
    return 'Your notes....'
}

const addNote = function(title,body){
    const notes = loadNotes();

    // check duplicate title
    const duplicateNotes =  notes.filter(function(note){
        return note.title === title;
    })

    if(duplicateNotes.length === 0){
        // adding notes : we use push method
         notes.push({
        // push an object
          title: title,
          body: body
        })
        
        // save the notes
        saveNotes(notes); 
        console.log(chalk.green.inverse('new notes added'));
    }else{
        console.log(chalk.red.inverse('note title taken'));
    }
  
}

const removeNote = function(title){
   const notes = loadNotes();
   const notesToKeep = notes.filter(function(note){
    return note.title !== title;
   })

   if(notes.length > notesToKeep.length){
    console.log(chalk.green.inverse('note removed'));
    saveNotes(notesToKeep);
   }else{
    console.log(chalk.red.inverse('no notes found'))
   }
 
}

const readNote = (title) =>{
    const notes = loadNotes();
    const note = notes.find((note)=>note.title === title);

    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse('Note not found'));
    }
}

const listNotes = () =>{
    const notes = loadNotes();

    console.log(chalk.inverse('Your Notes'));

    notes.forEach((note) => {
        console.log(note.title);
    });
}

const saveNotes = function(notes){
    // takes an i/p of array type
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = function(){
    // function return an array of notes

    try{
        // error handling::
        // if there is no notes initially it return an empty array[]

        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    
    } catch(e){
        return [];
    }
   
}


module.exports = {
    getNotes:  getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}








































// addNote is responsible for add the data,
// get the notes  save to the data storage 