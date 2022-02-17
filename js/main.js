document.getElementById("invalid-message").style.display = "none";
// get value
function getValue(id) {
  return document.getElementById(id).value;
}
function updateTotalExpenses() {
  const foodExpense = parseFloat(getValue("foodExpensesInput"));
  const rentExpense = parseFloat(getValue("rentExpensesInput"));
  const clothExpense = parseFloat(getValue("clothesExpensesInput"));

  if (
    (foodExpense > 0 &&
    rentExpense > 0 &&
    clothExpense > 0) &&
    (foodExpense % 1 == 0 &&
    rentExpense % 1 == 0 &&
    clothExpense % 1 == 0)
  ) {
    return foodExpense + rentExpense + clothExpense;
  } else {
    return (document.getElementById("invalid-message").style.display = "block");
  }
}
function balance() {
  const income = parseFloat(getValue("incomeInput"));
  const totalExpenses = updateTotalExpenses();

  return income - totalExpenses;
}

function savingsAmount() {
  const balanceAmount = parseFloat(balance());
  const perc = document.getElementById("percentage");
  const percentage = parseFloat(perc.value);
  return ((balanceAmount * percentage) / 100).toFixed(3);
}
window.addEventListener("load", () => {
  document.getElementById("calculate-btn").addEventListener("click", () => {
    const totalExpenses = document.getElementById("totalExpenses");
    totalExpenses.innerText = updateTotalExpenses();
    const balanceText = document.getElementById("balance");
    balanceText.innerText = balance();
  });
  document.getElementById("save").addEventListener("click", () => {
    const savings = document.getElementById("saving-amount");
    const savingsText = savingsAmount();
    savings.innerText = savingsText;
    const balanceAmount = balance();
    const remainBalance = document.getElementById("remaining-balance");
    remainBalance.innerText =
      parseFloat(balanceAmount) - parseFloat(savingsText);
  });
});
