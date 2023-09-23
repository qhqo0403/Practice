import React, { useState } from 'react';
import ShoppingList from './components/ShoppingList';
import item from './modules/item';
import ShoppingListForm from './components/ShoppingListForm';
import { v4 as getId } from 'uuid';

function App() {
  const [items, setItems] = useState<item[]>([]); // state는 제너릭 형태로 샤용해야함

  const addItem = (product: string, quantity: number) => {
    setItems([...items, {id: getId(), product, quantity}]);
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ShoppingListForm onAddItem={addItem}/>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
