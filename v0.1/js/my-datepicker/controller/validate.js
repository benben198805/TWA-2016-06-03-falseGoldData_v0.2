function validate(inputText) {
    var reg = /^[01]?[0-9]{1}\/[0-3]?[0-9]{1}\/([0-9]{4}|[0-9]{2})$/;
    return reg.test(inputText) || inputText.length == 0;
}