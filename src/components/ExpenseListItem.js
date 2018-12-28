import React from 'react';

const ExpenseListItem = ({ description, amount}) => (
    <div>
            <h4>Description: {description}</h4>
            Amount: {amount}
    </div>
);

export default ExpenseListItem;
