import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';



function Expenses(props) {
    const [filterYear, setFilter] = useState('2021');
    function selectHandler(selectedYear) {
      setFilter(selectedYear);
    }
    const filteredExpenses = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filterYear;
    });    

    return <div><Card className='expenses'>
    <ExpensesFilter onSelect={selectHandler} selected={filterYear} />
    <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList list={filteredExpenses}/>
    </Card>
    </div>
}

export default Expenses;