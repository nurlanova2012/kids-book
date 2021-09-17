import React, {useState} from 'react';

function Categories({items, onClick}) {
  const [activeItem, setActiveItem] = useState(0);

  const onItemSelect = (idx) => {
    setActiveItem(idx);
  }

    return (
        <div className="categories">
        <ul>
          <li 
          onClick={()=> onItemSelect(null)}
           className = {activeItem === null ? "active" : ""}>
            Все
          </li>
          {items.map((itemName, idx) => (
           <li className = {activeItem === idx ? "active" : ""} onClick={() => onItemSelect(idx)} key={`${itemName}_${idx}`}> {itemName}
           </li>
          ))}
        </ul>
      </div>
      
    );
}

export default Categories;
