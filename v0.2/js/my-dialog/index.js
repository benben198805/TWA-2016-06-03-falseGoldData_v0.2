function reload_html(parentDiv, templateId) {
    renderListBoxHtml(parentDiv, templateId);
    renderDialogBoxHtml($(".dialog-box"), $("#dialog"));

    dialog = $(".dialog-box");
    dialog = init_jqeruyUI_dialog(dialog);
}

function renderListBoxHtml(parentDiv, templateId) {
    var container = $(templateId);
    var template = _.template(container.text());
    parentDiv.html(template(htmlData));
}

function renderDialogBoxHtml(parentDiv, templateId) {
    var container = $(templateId);
    var template = _.template(container.text());
    parentDiv.html(template(htmlData));
}

function init_jqeruyUI_dialog(dialog) {
    dialog.dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 500
        }
    });
    return dialog;
}

function change_state(parentDiv, templateId) {
    reload_html($(parentDiv), $(templateId));
}