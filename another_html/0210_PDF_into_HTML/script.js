function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function thisRespondHightlightText(thisDiv){
    $(thisDiv).on("mouseup", function () {
        var selectedText = getSelectionText();
        var selectedTextRegExp = new RegExp(selectedText,"g");
        var text = $(this).text().replace(selectedTextRegExp, "<span class='red'>" + selectedText + "</span>");
        $(this).html(text);
    });
}

thisRespondHightlightText(".select--highlight--active");