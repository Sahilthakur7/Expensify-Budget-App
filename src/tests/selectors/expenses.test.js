import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'playstation',
    note: '',
    amount: 500,
    createdAt: 0
},
    {
        id: '2',
        description: 'xbox',
        note: '',
        amount: 390,
        createdAt: moment(0).subtract(4, 'days').valueOf()

    },
    {
        id: '3',
        description: 'wii',
        note: '',
        amount: 400,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]

test('should filter by text value', () => {
    const filters = {
        text: 'o',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1]]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0]])

});

test('should sort by date', ()=> {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1]])

});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[2], expenses[1]])
})


