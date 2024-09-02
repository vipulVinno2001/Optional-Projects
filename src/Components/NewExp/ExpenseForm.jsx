const ExpenseForm = () => {
  return (
    <div className="flex  justify-center p-6 ">
      <form className="bg-blue-900 rounded-2xl p-10 flex flex-col   gap-4" action="">
        <div className="flex">
          {" "}
          <div className="">
            <label className="p-2  text-white font-semibold" htmlFor="">
              Title:
            </label>
            <input
              className="rounded-lg p-1 text-black font-semibold bg-slate-400 border-1 border-black"
              type="text"
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
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="p-2 border-2 border-white  bg-green-600 rounded-2xl " type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
