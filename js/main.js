document.getElementById("invalid-message").style.display = "none";
document.getElementById("error-msg").style.display = "none";

// get value
function getValue(id) {
  return document.getElementById(id);
}

function savingsAmount() {
  const incomeInput = document.getElementById("incomeInput");
  const income = parseFloat(incomeInput.value);
  const perc = document.getElementById("percentage");
  const percentage = parseFloat(perc.value);
  const savingsCashAmount = ((income * percentage) / 100).toFixed(2);
  return savingsCashAmount;
}
window.addEventListener("load", () => {
  document.getElementById("calculate-btn").addEventListener("click", () => {
    const income = getValue("incomeInput");

    const foodExpense = getValue("foodExpensesInput");
    const rentExpense = getValue("rentExpensesInput");
    const clothExpense = getValue("clothesExpensesInput");

    if (
      parseFloat(income.value) > 0 &&
      parseFloat(foodExpense.value) > 0 &&
      parseFloat(foodExpense.value) > 0
    ) {
      const totalExpenses = document.getElementById("totalExpenses");
      const totalCost =
        parseFloat(foodExpense.value) +
        parseFloat(rentExpense.value) +
        parseFloat(clothExpense.value);

      const balance = parseFloat(income.value) - totalCost;

      totalExpenses.innerText = totalCost;
      const balanceText = document.getElementById("balance");
      balanceText.innerText = balance;
    } else {
      document.getElementById("invalid-message").style.display = "block";
      totalExpenses.innerText = null;
      balanceText.innerText = null;
    }
  });
  document.getElementById("save").addEventListener("click", () => {
    const savings = document.getElementById("saving-amount");
    const savingsText = savingsAmount();
    const balanceAmount = parseFloat(document.getElementById("balance").innerText);
    console.log(balanceAmount);
    const remainBalance = document.getElementById("remaining-balance");

    if (parseFloat(balanceAmount) > parseFloat(savingsText)) {
      document.getElementById("error-msg").style.display = "none";
      savings.innerText = savingsText;
      remainBalance.innerText =
        parseFloat(balanceAmount) - parseFloat(savingsText);
    } else {
      document.getElementById("error-msg").style.display = "block";
      savingsText.innerText = null;
      remainBalance.innerText = null;
    }
  });
});
