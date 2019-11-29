

function controllerCanBeIstantiatedWithOneNote() {
    var noteListOne = new NoteList();
    var controllerOne = new NoteController(noteListOne);
    assert.isTrue(controllerOne instanceof NoteController)
    assert.isTrue(controllerOne.noteList === noteListOne);
    assert.isTrue(controllerOne.noteList.returnNotes().length === 1)
    console.log("test 11 passed")
}

controllerCanBeIstantiatedWithOneNote()


function testChangeHtmlWithOneNote() {

    var noteController = new NoteController(noteList = new NoteList(), notelistview = new NoteListView(noteList))
    noteController.changeHtml()
    assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div>test</div></li></ul>");
    console.log("test 12 passed")
}

testChangeHtmlWithOneNote()


function canReturnHtml() {

        function NoteListDouble() {
            this.createNoteCallCount = 0;
        }
    
        NoteListDouble.prototype = {
            createNote: function () {
                this.createNoteCallCount++
            },
    
        }
    
        var noteListDouble = new NoteListDouble();
    
        var controllerTwo = new NoteController(noteListDouble);
    
        if (noteListDouble.createNoteCallCount !== 1 ) {
            throw new Error("createNote should have been called once");
        }

        console.log("test 13 passed")
    }
    
canReturnHtml()

// function canReturnHtml() {


//     function NoteDouble() {
//     }
    
//     NoteDouble.prototype = {
//         returnText: function () {
//             return "test"
//         }
//     }

//     function NoteListDouble() {
//         this.createNoteCallCount = 0;
//         this.notedouble 

//     }

    

//     NoteListDouble.prototype = {
//         createNote: function (test, notedouble) {
//             notedouble = this.notedouble
//             this.createNoteCallCount++
//             [].push(notedouble);
//         },

//         returnNotes: function () {
//             return ["text"];
//         }
//     }

//     var noteListDouble = new NoteListDouble();

//     var controllerTwo = new NoteController(noteListDouble);

//     if (noteListDouble.createNoteCallCount !== 1 ) {
//         throw new Error("createNote should have been called once");
//     }
//     console.log(controllerTwo.noteList)

//     assert.isTrue(controllerTwo.changeHtml() === "<ul><li><div>test</div></li></ul>")
//     console.log("test 12 passed")
// }

// canReturnHtml()