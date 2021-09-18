import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import App from './App';

const increment = ()=> {
  store.dispatch({
    type: "counter/incremented"
  })
};
store.subscribe(()=> {
  console.log("changed:", store.getState());
})
const decrement = ()=> {
  store.dispatch({
    type: "counter/decremented"
  })
};



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <button onClick = {decrement}>SUBTR - 1</button>
    <button onClick = {increment}>ADD + 1</button>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

