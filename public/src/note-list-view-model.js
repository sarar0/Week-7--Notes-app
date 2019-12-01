(function(exports) {
    
    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.displayHtml = function() {
        var list = [];
      
        for (var i = 0; i < this.noteList.returnNotes().length; i++) {
            list.push("<li><div><a id='note-link' href='http://localhost:8080#" + this.noteList.returnNotes()[i].returnId() + "'>"
           + this.noteList.returnNotes()[i].returnText().substring(0, 19) + "</a></div></li>"); 
        }
        list.unshift("<ul>");
        list.push("</ul>");
        return list.join("");
    }

    exports.NoteListView = NoteListView;
}) (this)


