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

    Note.prototype.returnId = function() {
        return this.id;
    }


  exports.Note = Note;
}) (this);