import React from "react";
import item from "../modules/item";

interface ShoppingListProps {
  items: item[];
}

const ShoppingList = (props: ShoppingListProps) => {
  return (
    <>
      <ul>
        {props.items.map(item => (
          <li key={item.id}>{item.product} - {item.quantity}</li>
        ))}
      </ul>
    </>
  )
}

export default ShoppingList;