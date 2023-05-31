import React, { useState } from "react";

import Button from "../form/Button";

import "../todoitem/style.css";

export default function TodoItem({ text, handleRemove, handleEdit, id }) {
    const [editing, setEditing] = useState(false);
    const [itemText, setItemText] = useState(text)


    const handleInputChange = (event) => {
        setItemText(event.target.value);
    }

    const handleEditSubmit = () => {
        handleEdit(id, itemText);
        toggleEditing();
    }

    const toggleEditing = () => {
        setEditing((prevState) => !prevState);
    }

    const onClick = () => {
        handleRemove(id);
    };

    return (
        <div className="todo-item">
            {editing ? (
                <input className='form__edit'
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
                text="Delete"
                onClick={onClick}
                customClass="todo-item__delete"
            />
        </div>
    )


}
