
document.write("<script language='JavaScript' src='js/my-dialog/view/render.js'></script>");

$.fn.my_dialog = function () {
    var boxIndex = 1;
    var dialog = $(this);
    var target = $("div[role='box']");
    init_my_dialog(dialog, target);
    boxIndex = add_submit_event(dialog, target, boxIndex)

    return {
        show_dialog_handler: show_dialog_handler,
        dialog: dialog
    }
};

function show_dialog_handler(dialog) {
    dialog.dialog("open");
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

function init_my_dialog(dialog, target) {
    dialog = init_jqeruyUI_dialog(dialog);

    $("#dialog-close").bind("click", function () {
        my_dialog_close_handler(dialog);
    });

    target.delegate("button[role='cal-del']", "click", my_dialog_del_handler);
}

function add_submit_event(dialog, target, boxIndex) {
    $("#dialog-submit").bind("click", function () {
        boxIndex= my_dialog_submit_handler(dialog, target, boxIndex);
    });
    return boxIndex;
}

function my_dialog_submit_handler(dialog, target, boxIndex) {
    var selected = $("input[name='radio']:checked").val();
    if (selected == 1) {
        render.addDatePicker(target, boxIndex);
        boxIndex++;

    } else if (selected == 2) {
        render.addTextBox(target);
    }
    dialog.dialog("close");
    return boxIndex;
}

function my_dialog_close_handler(dialog) {
    dialog.dialog("close");
}

function my_dialog_del_handler() {
    $(this).parent().remove();
}