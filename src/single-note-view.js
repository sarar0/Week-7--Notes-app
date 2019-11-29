(function(exports) {
    function SingleNoteView(note) {
        this.note = note;
    }

    SingleNoteView.prototype.returningHtml = function () {
        return "<div>" + this.note.returnText() + "</div>"
    }

    exports.SingleNoteView = SingleNoteView;

}) (this)