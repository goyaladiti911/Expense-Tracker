import { useState } from 'react';
import Expenses from './Expenses/Expenses'
import NewExpense from './NewExpense/NewExpense';

function App() {
  
  const expenses = [
    {
      id: '0',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: '1', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: '2',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: '3',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [ expenseArr, setExpenseArr] = useState(expenses);
  function addExpenseHandler(newObject) {
    setExpenseArr((prevExpenses) =>
     { return [ newObject,...prevExpenses];});
  }

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses
        expenses={expenseArr}
      />     
    </div>
  );
}

export default App;
