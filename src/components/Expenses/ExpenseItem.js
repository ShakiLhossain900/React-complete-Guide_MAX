import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className="expense-item">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

    </Card>
  );
};

export default ExpenseItem;
