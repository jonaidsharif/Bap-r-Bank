//handle deposti button event
document.getElementById('deposti-button').addEventListener('click', function() {
    // get the amount amount deposti
    const depostiInput = document.getElementById('deposti-input');

    const newDepostiAmountText = depostiInput.value;
    const newDepostiAmount = parseFloat(newDepostiAmountText);

    //update deposti total
    const depostiTotal = document.getElementById('deposti-total');
    const previousDepostiText = depostiTotal.innerText;
    const previousDepostiAmount = parseFloat(previousDepostiText);

    const newBalanceTotal = previousDepostiAmount + newDepostiAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposti input field
    depostiInput.value = '';
})