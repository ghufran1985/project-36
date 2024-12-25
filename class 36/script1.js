transactionAmountInput = document.getElementById("transactionAmount");
creditButton = document.getElementById("credit");
debitButton = document.getElementById("debit");
balanceDisplay = document.getElementById("balance");
darkModeToggle = document.getElementById("darkModeToggle");

let balance = 0; 

function updateBalanceDisplay() {
  balanceDisplay.textContent = balance;
}

creditButton.addEventListener("click", () => {
     amount = parseFloat(transactionAmountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    balance += amount;
    updateBalanceDisplay();
    transactionAmountInput.value = "";
});

debitButton.addEventListener("click", () => {
    amount = parseFloat(transactionAmountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    balance -= amount;
    updateBalanceDisplay();
    transactionAmountInput.value = "";

});

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});