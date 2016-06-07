var warning = {
    showWarn: function (element) {
        element.addClass("redBorder");
        element.after("<span id='warn' style='color:red'>wrong format</span>");
    },
    hiddenWarn: function (element) {
        element.removeClass("redBorder");
        element.parent().find("span").remove();
    }
}