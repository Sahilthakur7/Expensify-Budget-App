import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id ,description, amount}) => (
    <div>
            <h4>Description: {description}</h4>
            Amount: {amount}
            <button onClick={()=>{
                dispatch(removeExpense({id}));
            }}>Remove</button>
    </div>
);


export default connect()(ExpenseListItem);
