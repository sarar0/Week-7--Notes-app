var note = new Note("My favourite language is JavaScript", 0);

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

function testHasIdproperty() {
  assert.isTrue(note.id === 0);
  console.log("test 17 passed")
}

testHasIdproperty();

function testHasUniqueId() {
  var note = new Note("Second test");
  assert.isTrue(note.id === 1);
  console.log("test 18 passed")
}

testHasUniqueId() 