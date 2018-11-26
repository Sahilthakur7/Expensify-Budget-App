import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Expense Dashboard
    </div>
);

const AddExpensePage = () => (
    <div>
        Add expense
    </div>
);

const EditPage = () => (
    <div>
        On the edit page
    </div>
);

const HelpPage = () => (
    <div>
        On the help page
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditPage}/>
            <Route path="/help" component={HelpPage}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes,document.getElementById('app'));
