var render = {
    loadTemplate: function () {
        var previewBoxTemplate = _.template("<div role='box'><% _.forEach(inputs,function(input){%><div><%- input%>:<input style='width: 150px;' type='<%- input%>' /></div><%})%></div>");
        var editBoxTemplate = _.template("<div role='box'><% inputs.forEach (function(input,index){%><div><%- input%>:<input style='width: 150px;' type='<%- input%>' /><button role='input-del' data-index='<%- index%>'>-</button></div><%})%></div>");

        var viewBtnTemplate = _.template("<div role='viewBtn'><button role='btn-show-edit'><%- label%></button></div>");
        var boxTemplate = _.template("<div role='box'><%- html%></div>");
        var openerTemplate = _.template("<div style='margin-top:10px;'><button role='dialog-opener' id='opener'>+</button></div>");

        var dialogTemplate = _.template("<div role='dialog-box'><div><input name='radio' value='1' checked role='for-datepicker' type='radio' />datepicker</div><div><input name='radio' value='2' role='for-textbox' type='radio' />textbox</div><input type='button' id='dialog-submit' role='dialog-submit' value='submit'><input type='button' id='dialog-close' role='dialog-close' value='cancle'></div>");
        return {
            previewBoxTemplate: previewBoxTemplate,
            editBoxTemplate: editBoxTemplate,
            viewBtnTemplate: viewBtnTemplate,
            boxTemplate: boxTemplate,
            openerTemplate: openerTemplate,
            dialogTemplate: dialogTemplate
        }
    },
    renderHtml: function (targetDom, htmlData) {
        var template = this.loadTemplate();

        var html = "";
        if (htmlData.isEdit) {
            var viewBtnHtml = template.viewBtnTemplate({ label: htmlData.labels[htmlData.isEdit ? 0 : 1] });
            var boxHtml = template.editBoxTemplate(htmlData);
            var openerHtml = template.openerTemplate("");
            var dialogHtml = template.dialogTemplate("");
            html = viewBtnHtml + boxHtml + openerHtml + dialogHtml;
        } else {
            var viewBtnHtml = template.viewBtnTemplate({ label: htmlData.labels[htmlData.isEdit ? 0 : 1] });
            var boxHtml = template.previewBoxTemplate(htmlData);
            var dialogHtml = template.dialogTemplate("");
            html = viewBtnHtml + boxHtml + dialogHtml;
        }
        targetDom.html(html);
    }
}