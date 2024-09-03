

const FilteredYear = (onChangeFilter) => {

    const handleChange = (e) =>{
        onChangeFilter.onChangeFilter(e.target.value)
        //console.log(e.target.value)
    }
  return (
    <div>
        <select name="" id="" onChange={handleChange}>
            <option value="Select Year">Select Years</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
    </div>
  )
}

export default FilteredYear