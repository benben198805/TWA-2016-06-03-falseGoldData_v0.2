var render = {
    renderHtml: function (targetDom, htmlData) {
        var previewBoxTemplate = _.template("<div role='box'><% _.forEach(inputs,function(input){%><div><%- input%>:<input style='width: 150px;' type='<%- input%>' /></div><%})%></div>");
        var editBoxTemplate = _.template("<div role='box'><% _.forEach(inputs,function(input){%><div><%- input%>:<input style='width: 150px;' type='<%- input%>' /><button data-role='input-del'>-</button></div><%})%></div>");

        var viewBtnTemplate = _.template("<div role='viewBtn'><button role='btn-show-edit'><%- label%></button></div>");
        var boxTemplate = _.template("<div role='box'><%- html%></div>");
        var openerTemplate = _.template("<div style='margin-top:10px;'><button role='dialog-opener' id='opener'>+</button></div>");

        var html = "";
        if (htmlData.isEdit) {
            var boxHtml = editBoxTemplate(htmlData);
            var viewBtnHtml = viewBtnTemplate({ label: htmlData.labels[htmlData.isEdit ? 0 : 1] });
            var openerHtml = openerTemplate("");
            html = viewBtnHtml + boxHtml + openerHtml;
        } else {
            var viewBtnHtml = viewBtnTemplate({ label: htmlData.labels[htmlData.isEdit ? 0 : 1] });
            var boxHtml = previewBoxTemplate(htmlData);
            html = boxHtml;
        }
        targetDom.html(html);
    }
}