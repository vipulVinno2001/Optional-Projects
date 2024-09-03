import { useState } from "react";

const ExpenseForm = (onSaveExpenseData) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  // const titleChangeHandler = (e) => {
  //   setEnteredTitle(e.target.value);
  //   // setUserInput({
  //   //     ...userInput,
  //   //     enteredTitle:e.target.value,

  //   // })

  //   // setUserInput((prevState) => {
  //   //   return {
  //   //     ...prevState,
  //   //     enteredTitle: e.target.value,
  //   //   };
  //   // });
  // };

  // const amountChnageHandler = (e) => {
  //   setEnteredAmount(e.target.value);
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredAmount: e.target.value,
  //   // });
  // };

  // const dateChangeHandler = (e) => {
  //   setEnteredDate(e.target.value);
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredDate: e.target.value,
  //   // });
  // };

  const inputhandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(new Date(value));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title:enteredTitle,
      amount:enteredAmount,
      date:enteredDate
    }


 //console.log(expenseData)
 onSaveExpenseData.onSaveExpenseData(expenseData)
 setEnteredAmount('');
 setEnteredTitle('');
 setEnteredDate('')
  };
  
  return (
    <div className="flex  justify-center p-6 ">
      <form
        className="bg-blue-900 rounded-2xl p-10 flex flex-col   gap-4"
        action=""
        onSubmit={submitHandler}
      >
        <div className="flex">
          <div className="">
            <label className="p-2  text-white font-semibold" htmlFor="">
              Title:
            </label>
            <input
              className="rounded-lg p-1 text-black font-semibold bg-slate-400 border-1 border-black"
              type="text"
              value={enteredTitle}
              onChange={(event) => inputhandler("title", event.target.value)}
            />
          </div>
          <div>
            <label className="p-2  text-white font-semibold" htmlFor="">
              Amount:
            </label>
            <input
              className="rounded-lg p-1 text-black font-semibold bg-slate-400 border-1 border-black"
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={(event) => inputhandler("amount", event.target.value)}
            />
          </div>
          <div>
            <label className="p-2  text-white font-semibold" htmlFor="">
              Date:
            </label>
            <input
              className="rounded-lg p-1 text-black font-semibold bg-slate-400 border-1 border-black"
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={(event) => inputhandler("date", event.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="p-2 border-2 border-white  bg-green-600 rounded-2xl "
            type="submit"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
