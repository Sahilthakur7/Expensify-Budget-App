import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id ,description, amount}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h4>Description: {description}</h4>
        </Link>
        Amount: {amount}
        <button onClick={()=>{
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
);


export default connect()(ExpenseListItem);
