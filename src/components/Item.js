import React,{useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)

  const addItem = ()=>{
    setCart(true);
    
  }

  return (
    <li className={cart ? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addItem} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
