import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id ,description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h4>Description: {description}</h4>
        </Link>
        Amount: {numeral(amount/100).format('$0,0.00')} : {moment(createdAt).format('Do MMMM ,YYYY')}
        <button onClick={()=>{
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
);


export default connect()(ExpenseListItem);
