
document.write("<script language='JavaScript' src='js/my-dialog/view/render.js'></script>");

$.fn.my_dialog = function () {
    var htmlData = {
        inputs: [],
        isEdit: true,
        labels: ["Edit", "Preview"]
    };
    var dialog = $(this);
    var target = $("div[role='box']");
    init_my_dialog(dialog, target);
    htmlData = add_submit_event(dialog, target, htmlData);

    target.delegate("button[role='input-del']", "click", my_dialog_del_handler);

    return {
        show_dialog_handler: show_dialog_handler,
        change_view_state: change_view_state,
        dialog: dialog,
        htmlData: htmlData
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
}

function add_submit_event(dialog, target, htmlData) {
    $("#dialog-submit").bind("click", function () {
        htmlData = my_dialog_submit_handler(dialog, target, htmlData);
        render.renderHtml($("div[role='panel']"), htmlData);
    });
    return htmlData;
}

function my_dialog_submit_handler(dialog, target, htmlData) {
    var selected = $("input[name='radio']:checked").val();
    if (selected == 1) {
        htmlData.inputs.push("date");
    } else if (selected == 2) {
        htmlData.inputs.push("text");
    }
    dialog.dialog("close");
    return htmlData;
}

function my_dialog_close_handler(dialog) {
    dialog.dialog("close");
}

function my_dialog_del_handler() {
    $(this).parent().remove();
}

function change_view_state(htmlData) {
    htmlData.isEdit = !htmlData.isEdit;
    render.renderHtml($("div[role='panel']"), htmlData);
}