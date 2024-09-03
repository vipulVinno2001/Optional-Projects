import ExpenseForm from "./ExpenseForm";

const NewExp = (onAddExpense) => {
  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    //console.log(expenseData)
    onAddExpense.onAddExpense(expenseData)
  }
  return (
    <div>
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
  );
};

export default NewExp;
