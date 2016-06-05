(function () {
    var my_dialog = $("div[role='dialog-box']").my_dialog();
    $("button[role='dialog-opener']").bind("click", function () {
        my_dialog.show_dialog_handler(my_dialog.dialog);
    });

    $("button[role='btn-show-edit']").bind("click", function () {
        my_dialog.change_view_state(my_dialog.htmlData);
    });
})();