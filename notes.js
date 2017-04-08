console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    console.log('Add a note');
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

