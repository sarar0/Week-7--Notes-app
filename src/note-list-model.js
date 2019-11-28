(function(exports) {    
    function NoteList() {
        this.notesArray = [];
    }

    NoteList.prototype.addNote = function(note) {
        this.notesArray.push(note);
    }

    NoteList.prototype.createNote = function(string) {
        var note = new Note(string);
        this.addNote(note);
    }

    NoteList.prototype.returnNotes = function() {
        return this.notesArray;
    }

  exports.NoteList = NoteList;
}) (this);