function testCanBeIstantiatedWithEmptyNoteList() {
    var noteListOne = new NoteList();
    var noteListView = new NoteListView(noteListOne)
    assert.isTrue(noteListView.noteList === noteListOne);
    assert.isTrue(noteListView.noteList.returnNotes().length === 0)
    console.log("test 7 passed")
}

testCanBeIstantiatedWithEmptyNoteList()


function testCanBeIstantiatedWithTwoNotes() {
    var noteListOne = new NoteList();
    noteListOne.createNote("string five")
    noteListOne.createNote("string six")
    var noteListView = new NoteListView(noteListOne)
    assert.isTrue(noteListView.noteList.returnNotes().length === 2)
    assert.isTrue(noteListView.noteList === noteListOne);
    assert.isTrue(noteListView.noteList.returnNotes()[0].returnText() === "string five")
    assert.isTrue(noteListView.noteList.returnNotes()[1].returnText() === "string six")
    console.log("test 8 passed")
}

testCanBeIstantiatedWithTwoNotes() 

function testReturnsHtmlWithOneNote() {
    var noteListOne = new NoteList();
    noteListOne.createNote("string seven")
    var noteListView = new NoteListView(noteListOne)
    assert.isTrue(noteListView.displayHtml() === "<ul><li><div>string seven</div></li></ul>");
    console.log("test 9 passed")
}

testReturnsHtmlWithOneNote() 

function testReturnsHtmlWithTwoNotes() {
    var noteListOne = new NoteList();
    noteListOne.createNote("string eight")
    noteListOne.createNote("string nine")
    var noteListView = new NoteListView(noteListOne)
    assert.isTrue(noteListView.displayHtml() === "<ul><li><div>string eight</div></li><li><div>string nine</div></li></ul>");
    console.log("test 10 passed")
}

testReturnsHtmlWithTwoNotes()

function testReturnsHtmlWithLongNote() {
    var noteListOne = new NoteList();
    noteListOne.createNote("string ten string ten string ten string ten string ten")
    var noteListView = new NoteListView(noteListOne)
    assert.isTrue(noteListView.displayHtml() === "<ul><li><div>string ten string t</div></li></ul>");
    console.log("test 16 passed")
}

testReturnsHtmlWithLongNote() 


