import { useState } from "react";
import FilteredYear from "./FilteredYear";

const FilterExpense = () => {
  const [filteredYear, setFilteredYear] = useState("");
  //const [filterInfoText , setFilterInfoText] = useState('2019 , 2021 , 2022');
  let filteredInfoText = "";

  if (filteredYear === "2019") {
    filteredInfoText = "2020 , 2021 , 2022";
  } else if (filteredYear === "2020") {
    filteredInfoText = "2019 , 2021 , 2022";
  } else if (filteredYear === "2021") {
    filteredInfoText = "2019 , 2020 , 2022";
  } else if(filteredYear === '2022') {
    filteredInfoText = "2019 , 2020 , 2021";
  }
  else if (filteredYear === 'select year'){
    setFilteredYear(null)
  }

  const filterChnageHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <div className="flex justify-around p-2">
        <p className="text-white  font-semibold ">Filter By Year</p>
        <FilteredYear
          selected={filteredYear}
          onChangeFilter={filterChnageHandler}
        />
      </div>

    {
      filteredYear && <p className="flex  justify-center p-2 text-white font-semibold underline">
      Data for years {filteredInfoText} is hidden
    </p>
    }
      
    </div>
  );
};

export default FilterExpense;
