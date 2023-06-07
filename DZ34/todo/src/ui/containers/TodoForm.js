import React, { useState } from "react";
// import '../pages/main.css';

import { useDispatch } from "react-redux";
import { addTodo } from "../../engine/core/todo/todoSlice";

function TodoForm() {
   const [value, setValue] = useState('');
   const dispatch = useDispatch();

   const onSubmit = (event) => {
      event.preventDefault();
      dispatch(addTodo({ todo: value }));
      setValue("");
   };

   return (
      <form>

         <input
            name="newTodo"
            type="text"
            placeholder=""
            value={value}
            onChange={(event) => setValue(event.target.value)}

         // className={classes.formInput}
         />
         <button onClick={onSubmit}>Отправить</button>

      </form>
   );
};

export default TodoForm;
