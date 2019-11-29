(function(exports) {
    
    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.displayHtml = function() {
        var list = [];
      
        for (var i = 0; i < this.noteList.returnNotes().length; i++) {
           list.push("<li><div>" + this.noteList.returnNotes()[i].returnText() + "</div></li>"); 
        }
        list.unshift("<ul>");
        list.push("</ul>");
        return list.join("");
    }

    exports.NoteListView = NoteListView;
}) (this)