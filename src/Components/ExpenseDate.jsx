const ExpenseDate = (dt) => {
  
    
    const month = dt.dt.toLocaleString('en-US' , {month:'long'})
    const year = dt.dt.getFullYear();
    const date = dt.dt.toLocaleString('en-US' , {day : '2-digit'})

    return (
    <div className="font-semibold text-white border-2 border-white p-3 rounded-lg bg-blue-700">
      <div>{month}</div>
      <div>{year}</div>
      <div>{date}</div>
    </div>
  );
};

export default ExpenseDate;
