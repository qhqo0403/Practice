import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (product: string, quantity: number) => void;
}

const ShoppingListForm = ({onAddItem}: ShoppingListFormProps): JSX.Element => {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = productInputRef.current!.value;
    const quantity = parseInt(quantityInputRef.current!.value);
    onAddItem(newProduct, quantity);
    productInputRef.current!.value = '';
    quantityInputRef.current!.value = '1';
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Product Name" ref={productInputRef}/>
      <input type="number" min={0} ref={quantityInputRef}/>
      <button>Add Item</button>
    </form>
  )
}

export default ShoppingListForm;