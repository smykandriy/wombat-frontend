import React from 'react';
import logo from '../../logo.svg'; 
import './Header.scss';

const Header = function() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link" 
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer" 
            >
                Learn React
            </a>

            <b className="hello"> 
                Hello 
            </b>
        </header>
    )
}

export default Header;