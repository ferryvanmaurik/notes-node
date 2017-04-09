console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    //console.log('Adding a note');
    var notes = [];
    var note = {
        title,
        body
    };
    
    try {
        // Ready current file content first and put it in the array
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }
    
    var duplicatesNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicatesNotes.length === 0) {
        // Then we can push the new one to it
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    };
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Reading: ', title)
};

var removeNote = (title) => {
    console.log('Removing note: ', title)
}

module.exports = {
    //addNote: addNode
    addNote,
    getAll,
    getNote,
    removeNote
};

