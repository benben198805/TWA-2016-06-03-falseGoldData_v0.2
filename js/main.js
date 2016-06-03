(function () {
    var boxIndex = 1;
    $("#dialog").dialog({
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

    var dialog = $("#dialog");
    $("#opener").click(function () {
        dialog.dialog("open");
    });

    $("#dialog-submit").click(function () {
        var selected = $("input[name='radio']:checked").val();
        if (selected == 1) {
            var html = "<input type='text' role='cal' /><input type='button' role='cal-btn' value='submit' /><button role='cal-del'>-</button>";
            html = "<div role='box" + boxIndex + "'>" + html + "</div>";
            $("div[role='box']").append(html);

            var date_picker = $("div[role='box" + boxIndex + "'] input[role='cal']").my_datepicker();

            $("div[role='box" + boxIndex + "'] input[role='cal-btn']").bind("click", function () {
                date_picker.validate_handler(date_picker.input);
            });
            boxIndex++;

        } else if (selected == 2) {
            $("div[role='box']").append("<input type='text'/><button role='cal-del'>-</button>");
        }
        dialog.dialog("close");
    });

    $("#dialog-close").click(function () {
        dialog.dialog("close");
    });

    $("div[role='box']").delegate("button[role='cal-del']", "click", function () {
        $(this).parent().remove();
    });

    $("button[role='btn-show-edit']").my_view(["cal-del", "opener"], ["edit", "show"]);
})();