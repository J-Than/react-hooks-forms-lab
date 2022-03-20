import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {

  const [newItem, setNewItem] = useState({id: (7).toString(), name: "", category: "Produce"})

  function handleChange(event) {
    const formName = event.target.name
    const value = event.target.value

    setNewItem({...newItem, [formName]: value})
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(newItem);
    const newId = parseInt(newItem.id, 10) + 1;
    setNewItem({...newItem, id: newId})
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
