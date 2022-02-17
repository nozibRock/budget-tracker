// get value
function getValue(id) {
  return document.getElementById(id).value;
}
function updateTotalExpenses() {
  const foodExpense = parseFloat(getValue("foodExpensesInput"));
  const rentExpense = parseFloat(getValue("rentExpensesInput"));
  const clothExpense = parseFloat(getValue("clothesExpensesInput"));

  return (foodExpense + rentExpense + clothExpense);
}
function balance() {
  const income = parseFloat(getValue("incomeInput"));
  const totalExpenses = updateTotalExpenses();

  return income - totalExpenses;
}

window.addEventListener("load", () => {
  document.getElementById("calculate-btn").addEventListener("click", () => {
    const totalExpenses = document.getElementById("totalExpenses");
    totalExpenses.innerText = updateTotalExpenses();
    const balanceText = document.getElementById("balance");
    balanceText.innerText = balance();
  });
});
