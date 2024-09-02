import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (expense) => {
  return (
    <div className="p-2">
      <Card >
        <div className="gap-12 flex">
          <ExpenseDate dt = {expense.expense.date}/>
          <h1 className="text-white font-semibold pt-8">{expense.expense.title}</h1>
        </div>

        <div className="pt-4">
          <h1 className="bg-blue-800 border-2 cursor-pointer  border-white p-4 text-white font-bold rounded-lg">
            {expense.expense.amount}
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default ExpenseItem;
