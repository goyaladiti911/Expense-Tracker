import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [inputText, setInputText] = useState({
        title: "",
        amount: "",
        date: ""
    });

    function changeHandler(event) {
        const {value,name} = event.target;
        setInputText((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        const newExpenseData = {
            title: inputText.title,
            amount: +inputText.amount,
            date: new Date(inputText.date)
        };
        props.onSaved(newExpenseData);
        setInputText({
            title:"",
            amount:"",
            date:""
        }); 
        props.isCancelled();       
    }
    

    return <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input onChange={changeHandler} type='text' name='title' value={inputText.title} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input onChange={changeHandler} type='number' min='0.01' step='0.01' name='amount' value={inputText.amount} />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input onChange={changeHandler} type='date' min='2019-01-01' max='2022-12-31' name='date' value={inputText.date} />
        </div>
    </div>
    
    <div className='new-expense__actions'>
        <button onClick={props.isCancelled}>Cancel</button>
        <button type='submit'>Add Expense</button>
    </div>
    </form>
}

export default ExpenseForm;