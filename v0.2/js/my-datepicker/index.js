document.write("<link rel='stylesheet' type='text/css' href='js/my-datepicker/jquery-ui-1.11.4.custom/jquery-ui.css'></link>");
document.write("<script language='JavaScript' src='js/my-datepicker/view/warning.js'></script>");
document.write("<script language='JavaScript' src='js/my-datepicker/controller/validate.js'></script>");
document.write("<script language='JavaScript' src='js/my-datepicker/jquery-ui-1.11.4.custom/jquery-ui.js'></script>");

$.fn.my_datepicker = function () {
    var input = $(this);
    input.datepicker();
    init_validation(this);
    return {
        validate_handler: validate_handler,
        input: input
    }
};

var validate_handler = function (input) {
    warning.hiddenWarn(input);
    if (!validate(input.val())) {
        warning.showWarn(input);
    }
};

var data_picker_handler = function (e) {
    warning.hiddenWarn($(e));
};

function init_validation(e) {
    $(e).bind("focus", function(){
        data_picker_handler(e);
    })
}