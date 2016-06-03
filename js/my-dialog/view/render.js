var render = {
    addTextBox: function (target) {
        target.append("<div><input type='text'/><button role='cal-del'>-</button></div>");
    },
    addDatePicker: function (target, boxIndex) {
        var html = "<input type='text' role='cal' /><input type='button' role='cal-btn' value='submit' /><button role='cal-del'>-</button>";
        html = "<div role='box" + boxIndex + "'>" + html + "</div>";
        target.append(html);

        var date_picker = $("div[role='box" + boxIndex + "'] input[role='cal']").my_datepicker();

        $("div[role='box" + boxIndex + "'] input[role='cal-btn']").bind("click", function () {
            date_picker.validate_handler(date_picker.input);
        });
    }
}