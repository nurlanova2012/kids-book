import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Categories, Sort, BookBlock} from "../components";
import {setCategory} from "../redux/actions/filters-a";


const sortItems = [
    {name: "популярности", type: "popular"},
    {name: "цене", type: "price"},
    {name: "алфавиту", type: "alphabet"}
   ];

const categoryNames = ["Сказки", "Мальчикам", "Девочкам", "Энциклопедии"];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({books})=> books.items);

  const onSelectCategory = (index)=> {
      dispatch(setCategory(index));
  };

    return (
        <div className="container">
        <div className="content__top">
        <Categories
          onClickItem = {onSelectCategory} items={categoryNames}/>
        <Sort items={sortItems}/>
       </div>
        <h2 className="content__title">Все книги</h2>
        <div className="content__items">
            {items && 
            sortItems.map((book)=> (
            <BookBlock  key={book.id} {...book}/>
            ))}
         </div>
      </div>
   
    )
}

export default Home;
