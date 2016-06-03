document.write("<script language='JavaScript' src='js/my-view/view/myViewRender.js'></script>");

$.fn.my_view = function (doms, labels) {
    var isView = true;
    $(this).bind("click", function () {
        isView = my_view_hander(doms, labels, isView, this);
    });
};

function my_view_hander(doms, labels, isView, e) {
    change_view_state(isView, doms);
    change_view_label(labels[isView ? 0 : 1], e);
    return !isView;
}

function change_view_state(isView, doms) {
    if (isView) {
        myViewRender.show(doms);
    }
    else {
        myViewRender.edit(doms);
    }
};

function change_view_label(label, e) {
    myViewRender.changeLabel(label, e);
};