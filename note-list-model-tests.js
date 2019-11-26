

function testListArrayIsEmptyByDefault() {
  var noteList = new NoteList();
  assert.isTrue(noteList.notesArray.length === 0)
}

testListArrayIsEmptyByDefault();

function testAddNotes(){
  var noteList = new NoteList();
  var newNote = new Note("test one")
  noteList.addNote(newNote)
  assert.isTrue(noteList.notesArray.length === 1)
  assert.isTrue(noteList.notesArray[0].text === "test one")
}

testAddNotes()

function testCreateAndStoreNote() {
  var noteList = new NoteList();
  noteList.createNote("test two")
  assert.isTrue(noteList.notesArray.length === 1)
  assert.isTrue(noteList.notesArray[0].text === "test two")
}

testCreateAndStoreNote()

function testNoteListReturnsNotesArray() {
    var noteList = new NoteList();
    noteList.createNote("test three")
    noteList.createNote("test four")
    assert.isTrue(noteList.returnNotes().length === 2)
    assert.isTrue(noteList.returnNotes()[0].text === "test three")
    assert.isTrue(noteList.returnNotes()[1].text === "test four")
  };
  
testNoteListReturnsNotesArray();