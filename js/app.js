function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('3 digit found, calling again', pin);
        return getPin();
    }
}

function generatePin() {
    document.getElementById('display-pin').value = getPin();
}

document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        };
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;

    const notitySuccess = document.getElementById('notity-success');
    const notityFailed = document.getElementById('notity-failed');
    if (pin == typedNumber) {
        notitySuccess.style.display = 'block';
        notityFailed.style.display = 'none';
    }
    else {
        notityFailed.style.display = 'block';
        notitySuccess.style.display = 'none';
    }
}