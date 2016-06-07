function add_input(type) {
    htmlData.inputs.push(type);
}
function remove_input(index) {
    var items = htmlData.inputs;
    _.remove(items, function (item, i) {
        return i == index;
    });
}