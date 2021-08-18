import React, { useState } from 'react' 
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
   const [isEditing,setIsEditing]=useState(false);
    const saveExpenseDataHandler =(enteredExpense)=>{
        const expenseData={
            ...enteredExpense,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    const startEditingHandler = () =>{
        setIsEditing(true);
    }
    const stopHandler= ()=>{
        setIsEditing(false);
    }
    return(
    <div className="new-expense">
    {!isEditing&&<button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopHandler} />}
    </div>
    )
};
export default NewExpense;
