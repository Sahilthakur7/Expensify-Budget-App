import { createStore , combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE

const addExpense = ( { description='', note='', amount = 0, createdAt =0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE

const removeExpense = ( {id} = {}) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)

// EDIT_EXPENSE

const editExpense = ( {id,update} = {}) => ( {
    type: 'EDIT_EXPENSE',
    id,
})

// SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
}); 

// SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
}); 

// SET_START_DATE

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});


// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id}) => {
                return id !== action.id;
            });

        default:
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE' :
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

//Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase);

        return startDateMatch && endDateMatch && textMatch;
    });
};

const store = createStore(
    combineReducers(
        {
            expenses: expensesReducer,
            filters: filtersReducer
        }
    )
);

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
