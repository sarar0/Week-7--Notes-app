(function(exports) {
    
    function NoteController(noteList = new NoteList(), notelistview = new NoteListView(noteList)) {
        this.noteList = noteList;
        this.notelistview = notelistview;
    }

    NoteController.prototype.changeHtml = function() { 
        document.getElementById('note-list').innerHTML = this.notelistview.displayHtml();
    }

    exports.NoteController = NoteController;
}) (this)
