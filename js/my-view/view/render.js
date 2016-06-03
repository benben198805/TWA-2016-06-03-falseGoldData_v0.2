var render = {
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
    changeLabel:function(label, e){
        $(e).html(label);
    }
}