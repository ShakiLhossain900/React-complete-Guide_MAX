import React ,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  const [title, setTitle]=useState(props.title)
  

  
  const clickHander =()=>{
    setTitle('updated')
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className="expense-item">{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHander}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
