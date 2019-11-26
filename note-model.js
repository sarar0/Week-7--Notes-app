(function(exports) {    
    function Note(string) {
        this.text = string;
    }

    Note.prototype.returnText = function() {
        return this.text;
    }

  exports.Note = Note;
}) (this);