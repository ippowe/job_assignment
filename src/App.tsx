import React from 'react';
import {ReactComponent as Tick} from './Icons/tick.svg';
import {ReactComponent as Done} from './Icons/done.svg';
import {ReactComponent as Delete} from './Icons/x-mark.svg';


const PLACEHOLDER = "오늘 할일을 입력해주세요."

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Todo
      </header>
      <form className="Todo-form">
        <input className="Todo-input" placeholder={PLACEHOLDER} />
      </form>
      <ul className="Todo-list">
        <li className="Todo-item">
          <Tick className="Todo-check-icon"/>
          <p className="Todo-text">javascript.info에서 javascript 공부</p>
          <Delete className="Todo-delete-icon"/>
        </li>
        <li className="Todo-item">
          <Tick className="Todo-check-icon"/>
          <p className="Todo-text">javascript.info에서 javascript 공부</p>
          <Delete className="Todo-delete-icon"/>
        </li>
        <li className="Todo-item__done">
          <Done className="Todo-check-icon__done"/>
          <p className="Todo-text">javascript.info에서 javascript 공부</p>
          <Delete className="Todo-delete-icon"/>
        </li>
      </ul>
    </div>
  );
}

export default App;
