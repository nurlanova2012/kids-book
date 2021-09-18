import React, {useState} from 'react';

const Categories = React.memo (
  function Categories({items, onClickItem}) {
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
            {items &&
            items.map((itemName, idx) => (
             <li 
             className = {activeItem === idx ? "active" : ""}
             onClick={() => onItemSelect(idx)} 
             key={`${itemName}_${idx}`}> 
             {itemName}
             </li>
            ))}
          </ul>
        </div>
        
      );
  }
  
)
export default Categories;
