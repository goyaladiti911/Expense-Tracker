import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    function clickHandler() {
        setIsEditing(true)
    }

    function cancelHandler() {
        setIsEditing(false)
    }

    function saveHandler(getExpenseData) {
        const newExpenseData = {
            ...getExpenseData,
            id: Math.random().toString()
        }
        props.onAddNewExpense(newExpenseData);
    }

    return <div className='new-expense'>
       {!isEditing && <button onClick={clickHandler} >Add New Expense</button>}
        {isEditing && <ExpenseForm onSaved={saveHandler} isCancelled={cancelHandler} />}
    </div>
}

export default NewExpense;