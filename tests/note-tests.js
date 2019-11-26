var note = new Note("My favourite language is JavaScript");

function testNoteReturnsTextProperty() {
  assert.isTrue(note.text === "My favourite language is JavaScript");
  console.log("test 1 passed")
};

testNoteReturnsTextProperty();

function testNoteReturnsText() {
  assert.isTrue(note.returnText() === "My favourite language is JavaScript");
  console.log("test 2 passed")
};

testNoteReturnsText();

