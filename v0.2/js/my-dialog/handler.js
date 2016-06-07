function my_input_add_handler() {
    var selected = $("input[name='radio']:checked").val();
    if (selected == 1) {
        add_input("date");
    } else if (selected == 2) {
        add_input("text");
    }
    dialog.dialog("close");
    reload_html($(".list-box"), $("#editListBox"));
}

function my_input_remove_handler(index, dom) {
    remove_input(index);
    $(dom).parent().remove();
}

function my_dialog_open_handler() {
    dialog.dialog("open");
}

function my_dialog_close_handler() {
    dialog.dialog("close");
}