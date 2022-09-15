function CheckInput(num) {
    let input = document.getElementById("input" + num);
    if (input.value === '' || input.value.includes('e')) {
        input.classList += ' errorClass';
        return false;
    }
    else {
        input.classList.value = input.classList.value.replaceAll(' errorClass', '');
        return true;
    }
}

function Calc() {
    if (!CheckInput(1) || !CheckInput(2)) {
        return;
    }
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
            if (value2 == 0) {
                document.getElementById("input2").classList += ' errorClass';
                return;
            }
            result = value1 / value2;
        default:
            break;
    }
    let result1 = document.getElementById('result1');
    let result2 = document.getElementById('result2');
    result1.innerHTML = result2.innerHTML;
    result2.innerHTML = value1 + ' ' + selectValue + ' ' + value2 + ' = ' + result;
}