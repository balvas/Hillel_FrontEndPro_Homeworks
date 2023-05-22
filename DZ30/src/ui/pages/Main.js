import React, { useState, useEffect } from "react";
import '../pages/main.css';

import Header from '../../components/Header';
import TodoItem from '../../components/todoitem/TodoItem';
import TodoForm from '../../containers/TodoForm';

export default function Main() {
   const [items, setItems] = useState([]);

   useEffect(() => {
      const itemsFromStorage = JSON.parse(localStorage.getItem('items')) || [];
      setItems(itemsFromStorage);
      localStorage.setItem('items', JSON.stringify(itemsFromStorage));
   }, []);

   const handleAdd = (event) => {
      event.preventDefault();
      const input = event.target.getElementsByClassName('form__input')[0];
      const text = input.value;
      const newItems = [
         ...items,
         { id: Math.random(), text }
      ];
      setItems(newItems);
      localStorage.setItem('items', JSON.stringify(newItems));
      input.value = '';
   }

   const handleRemove = (id) => {
      const lessItems = items.filter(item => item.id !== id);
      localStorage.setItem('items', JSON.stringify(lessItems));
      setItems(lessItems);
   }

   const handleEdit = (id, itemText) => {
      const updatedItems = items.map((item) => {
         if (item.id === id) {
            return { ...item, text: itemText };
         }
         return item;
      });
      localStorage.setItem('items', JSON.stringify(updatedItems));
      setItems(updatedItems);

   }

   return (
      <div className="container">
         <Header />
         <TodoForm handleAdd={handleAdd} />
         <div>
            {items.map((item) => (
               <TodoItem
                  key={item.id}
                  text={item.text}
                  id={item.id}
                  handleEdit={handleEdit}
                  handleRemove={handleRemove}
                  editing={item.id}
               />
            ))}
         </div>
      </div>
   );

}


