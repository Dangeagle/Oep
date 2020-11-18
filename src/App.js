import React, { useState, useEffect, useMemo, useCallback, useReducer, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

const Header = (props) => {
    return (
        <header className="App-header">
            {props.headerComponent}
        </header>
    )
};

function App() {
    const [course, setCourse] = useState('Lập trình trái tim');
    console.log(111, course)
    return (
        <div className="App">
        <div>
        
        </div>
            <Header headerComponent={
                <Fragment>
                    <h1>Hello thứ 5</h1>
                    <h1>Hello thứ 5</h1>
                    <h1>Hello thứ 5</h1>
                    <h1>Hello thứ 5</h1>
                    <h1>Hello thứ 5</h1>
                </Fragment>
            } />
            <button onClick={() => setCourse("Trái tim lập trình")}>Component Cha Click</button>
        </div>
    );
}

export default App;
