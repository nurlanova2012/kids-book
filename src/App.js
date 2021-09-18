
import {Route} from "react-router-dom";
import React, {useEffect} from 'react';
import axios from "axios";
import {Header} from "./components";
import {Home, Cart} from "./pages";
import { useDispatch } from "react-redux";
import { setBooks} from "./redux/actions/books";

import './App.scss';


function App() {
  const dispatch = useDispatch();

  useEffect (() => {
    axios.get("http://localhost:3000/db.json").then(({data})=> {
      dispatch(setBooks(data));
        })
  // fetch("http://localhost:3000/db.json").then((response)=> {
  //   response.json().then((json)=> {
  //     setBooks(json.books);
  //   });
  // });
  });

  return (
    <div className="wrapper">
      <Header/>
     <div className="content">
       <Route exact path="/" component = {Home} />
       <Route exact path="/Cart" component={Cart}/>

       </div>
    </div>

  );
}

export default App;
