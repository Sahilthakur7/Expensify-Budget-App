import { createStore } from 'redux';

const incrementCount = (payload = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    };
};

const decrementCount = (payload = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
    };
};

const reset = (payload = {}) => {
    return {
        type: 'RESET'
    }
};

// Reducers

const countReducer = (state = { count: 0}, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};


const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
})

//Incrementing the count

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(reset());

store.dispatch(decrementCount({ decrementBy: 3}));
