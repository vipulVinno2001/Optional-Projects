const ExpenseItem = () => {
  return (
    <div>
      <h1 className="pb-10 text-center text-xl  font- pt-6">Hii There</h1>
      <div className="flex justify-between  p-4 bg-blue-400 text-center">
        <div className="gap-12 flex">
          <h1>Date</h1>
          <h1>Discription</h1>
        </div>

        <div>
          <h1 className="bg-blue-800 border-2 border-white p-4 text-white font-bold rounded-lg">Price</h1>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
