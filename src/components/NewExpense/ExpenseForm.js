import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

   const [enteredTitle,setEnterdTitle] = useState('');
   const [enterdAmount, setEnteredAmount] = useState('');
   const [enteredDate,setEnterdDate ] =useState('');

// const [userInput, setUserInput]=useState({
//     enterdTitle:'', 
//     enterdAmount:'',
//     enteredDate:''
// });

    const titleChangeHandler =(event) => {
        setEnterdTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle:event.target.value}
        // })
    }
    const amountChangedHandler=(event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //  ...userInput,
        //  enterdAmount:event.target.value
        // })
        //     setUserInput((prevState)=>{
        //     return {...prevState, enteredAmount:event.target.value}
        // })
    }
    const dateChangedHandler =(event) =>{
        setEnterdDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
        //     setUserInput((prevState)=>{
        //     return {...prevState, enteredDate:event.target.value}
        // })
    };
    const submitHandler = (event) =>{
     event.preventDefault();

     const expenseData={
         title:enteredTitle,
         amount:enterdAmount,
         date: new Date(enteredDate)
     };

     //ai 3 ta function call korle jokhon form submition y click korbe tokhon amara abar value goloke reke abar save kore page reload kore felte parbu
    props.onSaveExpenseData(expenseData)
    // props.onSaveExpenseData(enterdAmount)
    // props.onSaveExpenseData(enteredDate)
     setEnterdTitle('');
     setEnteredAmount('');
     setEnterdDate('')

    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Titile</label>
            <input type="text"
            value={enteredTitle}
            onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01"
            value={enterdAmount}
            onChange={amountChangedHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" 
            value ={enteredDate}
            onChange={dateChangedHandler} />
          </div>
          <div className="new-expense__actions">
           <button type="submit"> Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
