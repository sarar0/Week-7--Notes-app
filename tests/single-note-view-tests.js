

function testCanBeIstantiated() {
    var noteOne = new Note();
    var singleNoteView = new SingleNoteView(noteOne);
    assert.isTrue(singleNoteView.note === noteOne);
    assert.isTrue(singleNoteView instanceof SingleNoteView)
    console.log("test 14 passed")
}


testCanBeIstantiated() 


function testCanReturnHtml() {
    var noteOne = new Note("Favourite drink: seltzer");
    var singleNoteView = new SingleNoteView(noteOne);
    assert.isTrue(singleNoteView.returningHtml() === "<div>Favourite drink: seltzer</div>")
    console.log("test 15 passed")
}


testCanReturnHtml() 

