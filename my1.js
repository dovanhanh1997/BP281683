let view = document.getElementById('view');

function inputValue(value) {
    if (view.value == '0') {
        view.value = value;
    } else {
        view.value += value;
    }
}

function Calculate() {
    let result = eval(view.value);
    view.value = result;
}

function del() {
    view.value = 0;
}