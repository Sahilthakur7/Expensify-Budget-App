import { createStore , combineReducers } from 'redux';
import uuid from 'uuid';






store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne =store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 130}));
const expenseTwo =store.dispatch(addExpense({ description: 'Hoe', amount: 100, createdAt: 111}));
// // store.dispatch(removeExpense( { id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 500}));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'fdsojfoi',
        description: 'Rent',
        note: '',
        amount: 50000,
        createdAt: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
