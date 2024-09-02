import { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (expense) => {

    const [title ,  setTitile] = useState(expense.expense.title)
    const handleTitle = () =>{
        setTitile("New Title")
    }
  
    return (
    <div className="p-2">
      <Card >
        <div className="gap-12 flex">
          <ExpenseDate dt = {expense.expense.date}/>
          <h1 className="text-white font-semibold pt-8">{title}</h1>
        </div>

        <div className="pt-4 flex gap-2">
          <h1 className="bg-blue-800 border-2 cursor-pointer  border-white p-2 h-12 mt-5   text-white font-bold rounded-lg">
            {expense.expense.amount}
          </h1>
          <button onClick={handleTitle} className="p-2 border-white  border-2 font-semibold  h-10 mt-6 bg-green-500 rounded-3xl ">Change Title</button>
        </div>
      
      </Card>
    </div>
  );
};

export default ExpenseItem;
