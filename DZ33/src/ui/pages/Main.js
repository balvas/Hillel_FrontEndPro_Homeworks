import React, { useState, useEffect } from "react";
// import '../pages/main.css';
import { useStyles } from "./useStyle";

import TodoItem from '../../components/todoitem/TodoItem';
import TodoForm from '../../ui/containers/TodoForm';

export default function Main() {
   const [items, setItems] = useState([]);
   const classes = useStyles();
   useEffect(() => {
      const itemsFromStorage = JSON.parse(localStorage.getItem('items')) || [];
      setItems(itemsFromStorage);
      localStorage.setItem('items', JSON.stringify(itemsFromStorage));
   }, []);

   const handleAdd = (value) => {
      // const input = document.getElementsByClassName('formInput')[0];
      const text = value;
      const newItems = [
         ...items,
         { id: Math.random(), text }
      ];
      setItems(newItems);
      localStorage.setItem('items', JSON.stringify(newItems));
      // input.value = '';
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
      <div className={classes.container}>
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


