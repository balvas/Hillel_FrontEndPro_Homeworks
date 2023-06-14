// Core
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Parts
import Button from "./form/Button";
import { useStyles } from "../pages/useStyle"
// Engine
import { todosActions, todosSelectors } from "../../engine/core/todos/slice";
import { handleRemoveTodo, handleEditTodo } from "../../engine/core/todos/thunks";

function TodoItem(props) {
    const { text, id } = props;
    const items = useSelector(todosSelectors.items);
    const [editing, setEditing] = useState(false);

    const classes = useStyles();

    const [itemText, setItemText] = useState(text)
    const handleInputChange = (event) => {
        setItemText(event.target.value);
    }
    const handleEditSubmit = () => {
        dispatch(handleEditTodo(id, itemText));
        toggleEditing();
    }
    const toggleEditing = () => {
        setEditing((prevState) => !prevState);
    }

    const dispatch = useDispatch();
    const handleRemove = () => { dispatch(handleRemoveTodo(id)) }

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
                onClick={handleRemove}
            customClass="todo-item__delete"
            />
        </div>
    )
}
export default TodoItem;
