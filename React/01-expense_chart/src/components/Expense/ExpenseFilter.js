import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

  const enteredYearHandler = (event) => {
    props.onChangeFilter(event.target.value);
  }

  return(
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={enteredYearHandler}>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter;