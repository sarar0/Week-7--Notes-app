// NEW OBJECTS:

var notelist = new NoteList();
var controller = new NoteController(notelist);

console.log(notelist.returnNotes())

// SUBMIT EVENT FOR NEW NOTE and CREATE NOTE

document.querySelector("#text").addEventListener('submit', function(event) {
    // console.log(event)
    var noteText = document.getElementById("text-area").value    
    
    notelist.createNote(noteText);
    
    controller.changeHtml()

    makeUrlChangeShowNote();

    event.preventDefault();
}, false);

// FUNCTIONS FOR HASH CHANGE

function makeUrlChangeShowNote() {
    window.addEventListener("hashchange", showUniqueNote);
};

function showUniqueNote() {
    showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
    var id_on_page = location.hash.split("#")[1];
    return id_on_page
};

function showNote(id) {

    var note = notelist.returnNotes()[id]
    var singleNoteView = new SingleNoteView(note)


    document
    .getElementById("single-note")
    .innerHTML = singleNoteView.returningHtml()
};

// display default NOTES:

// notelist.createNote("empty note")
// notelist.createNote("second note second note second note second note second note")
// notelist.createNote("third note third note third note third note third note")
// notelist.createNote("fourth note fourth note fourth note fourth note fourth note")

// controller.changeHtml()

// makeUrlChangeShowNote();
