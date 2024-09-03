import { useState } from "react";
import ExpenseItem from "./Components/ExpenseItem";
import FilterExpense from "./Components/FilteredData/FilterExpense";
import NewExp from "./Components/NewExp/NewExp";
//import { expense } from "./Data/expense"


 const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
function App() {
  const [expenses , setExpenses] = useState(expense)
 

  const addExpenseHandler = expense  => {
         console.log(expense)
         setExpenses(prevExpenses => {
          return [expense , ...prevExpenses]
         })
  }

  return (
    <div className="bg-gradient-to-t from-blue-950 to-blue-400 h-screen">
      <NewExp onAddExpense = {addExpenseHandler} />
      <FilterExpense />
      {
        expenses.map(expense =>{
          return(
            <ExpenseItem key = {expense.id} expense = {expense} />
          )
        })
      }
      {/* <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} /> */}
    </div>
  );
}

export default App;
