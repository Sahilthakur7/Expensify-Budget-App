import { createStore , combineReducers } from 'redux';

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
