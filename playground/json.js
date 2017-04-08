// var obj = {
//     name: 'Ferry'
// };

// //Convert object to string
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// //Convert string back to object (or array)
// var personString = '{"name": "Ferry","age": 40}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person.name);


const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);


