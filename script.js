function Calc() {
    let value1, value2, selectValue;
    value1 = parseFloat(document.getElementById("input1").value);
    value2 = parseFloat(document.getElementById("input2").value);
    selectValue = document.getElementById("selectId").value;
    let result
    switch (selectValue) {
        case '+':
            result = value1 + value2
            break;
        case '-':
            result = value1 - value2
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            result = value1/value2;
        default:
            break;
    }
    let result1 = document.getElementById('result1');
    let result2 = document.getElementById('result2');
    result1.innerHTML = result2.innerHTML;
    result2.innerHTML = value1 + ' ' + selectValue + ' ' + value2 + ' = ' + result;
    //console.log(value1, value2, selectValue, parseFloat(value1) - parseFloat(value2), document.getElementById("selectId").value)
}