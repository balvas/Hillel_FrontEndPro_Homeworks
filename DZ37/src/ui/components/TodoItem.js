import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./form/Button";
import { todosAsyncAction } from "../../engine/saga/asyncAction";
import { useStyles } from "../pages/useStyle";

function TodoItem(props) {
   const { text, id } = props;
   const classes = useStyles();
   const [editing, setEditing] = useState(false);
   const [itemText, setItemText] = useState(text)
   const handleInputChange = (event) => {
       setItemText(event.target.value);
   }
   const handleEditSubmit = () => {
      dispatch(todosAsyncAction.editTodoAsync({ id, itemText}));
         toggleEditing();
   }
   const toggleEditing = () => {
       setEditing((prevState) => !prevState);
   }


   const dispatch = useDispatch();
   const handleDelete = () => {
      dispatch(todosAsyncAction.deleteTodoAsync({ id: id }));
   }
   return (
      <div className="todo-item">
            {editing ? (
                <input className={classes.formInput}
                    type="text"
                    value={itemText}
                    onChange={handleInputChange}
                />
            ) : (
                <div className="todo-item__description">{text}</div>
            )}

            {editing ? (
                <Button
                    text="Save"
                    onClick={handleEditSubmit}
                customClass="todo-item__delete"
                />
            ) : (
                <Button
                    text="Edit"
                    onClick={toggleEditing}
                customClass="todo-item__delete"
                />
            )}
         <Button
            text="Удалить"
            onClick={handleDelete}
            customClass="todo-item__delete"
         />
      </div>
   )
}
export default TodoItem;
