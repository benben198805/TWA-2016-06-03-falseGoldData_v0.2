var myViewRender = {
    show: function (doms) {
        doms.forEach(function(element) {
            $("button[role='"+element+"']").hide();
        });
    },
    edit: function (doms) {
        doms.forEach(function(element) {
            $("button[role='"+element+"']").show();
        });
    },
    changeLabel:function(label, element){
        element.html(label);
    }
}