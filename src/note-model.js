(function(exports) {   
    
    function Note(string, id) {
        this.text = string;
        this.id = id || generateId();
    }

    var id = 0;

    function generateId() { return id++; };

    Note.prototype.returnText = function() {
        return this.text;
    }



  exports.Note = Note;
}) (this);