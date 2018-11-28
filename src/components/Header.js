import React from 'react';
import { BrowserRouter , Route , Switch , Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/Edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to="/Help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;
