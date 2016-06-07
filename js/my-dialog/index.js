
document.write("<script language='JavaScript' src='js/my-dialog/view/render.js'></script>");

(function ($) {
    var htmlData = {
        inputs: [],
        isEdit: true,
        labels: ["Edit", "Preview"]
    };
    var parentDiv;

    $.fn.my_dialog = function () {
        parentDiv = this;
        htmlData = reload_html(parentDiv, htmlData);
    };


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

    function my_dialog_submit_handler(parentDiv, dialog, htmlData) {
        var selected = $("input[name='radio']:checked").val();
        if (selected == 1) {
            htmlData.inputs.push("date");
        } else if (selected == 2) {
            htmlData.inputs.push("text");
        }
        dialog.dialog("close");
        reload_html(parentDiv, htmlData);
        return htmlData;
    }

    function change_state(parentDiv, htmlData) {
        htmlData.isEdit = !htmlData.isEdit;
        reload_html(parentDiv, htmlData);
    }

    function reload_html(parentDiv, htmlData) {
        render.renderHtml(parentDiv, htmlData);

        var dialog = parentDiv.find("div[role='dialog-box']");
        dialog = init_jqeruyUI_dialog(dialog);

        $("button[role='btn-show-edit']").bind("click", function () {
            htmlData.isEdit = !htmlData.isEdit;
            reload_html(parentDiv, htmlData);
        });

        $("button[role='dialog-opener']").bind("click", function () {
            dialog.dialog("open");
        });

        $("input[role='dialog-close']").bind("click", function () {
            dialog.dialog("close");
        });

        $("input[role='dialog-submit']").bind("click", function () {
            htmlData = my_dialog_submit_handler(parentDiv, dialog, htmlData);
        });

        $("button[role='input-del']").bind("click", function () {
            var index = $(this).attr("data-index");
            var items = htmlData.inputs;
            _.remove(items, function (item, i) {
                return i == index;
            });
            $(this).parent().remove();
        });
    }
})(jQuery);
