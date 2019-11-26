var note = new Note("My favourite language is JavaScript");

function testNoteReturnsTextProperty() {
  assert.isTrue(note.text === "My favourite language is JavaScript");
};

testNoteReturnsTextProperty();

function testNoteReturnsText() {
  assert.isTrue(note.returnText() === "My favourite language is JavaScript");
};

testNoteReturnsText();

