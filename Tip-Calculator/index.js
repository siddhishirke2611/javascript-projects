document.getElementById('calculate').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tip').value);
    
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        document.getElementById('total').innerText = 'Please enter valid numbers for bill amount and tip percentage.';
        return;
    }

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    document.getElementById('total').innerText = '$' + totalAmount.toFixed(2);
});