import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 2000}));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(state);

setTimeout(()=> {
    store.dispatch(addExpense({ description: 'Rent', amount: 2500, createdAt: 1500}));
}, 3000);

store.dispatch(addExpense({ description: 'Playstation', amount: 5000}));

const jsx = (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
