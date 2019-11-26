function testReturnsText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.returnText() === "My favourite language is JavaScript");
};

testReturnsText();