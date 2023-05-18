import React from "react";
// Parts
import Button from "../form/Button";
// Helpers
import "./style.css";

export default class TodoItem extends React.Component {
    render() {
        const { text, handleRemove, handleEdit, id } = this.props;
        const onClick = () => {
            handleRemove(id);
        }
        const onClick1 = () => {
            handleEdit(id);
        }
        return (
            <div className="todo-item">
                <div className="todo-item__description">{text}</div>
                <Button
                    text="Изменить"
                    onClick={onClick1}
                    customClass="todo-item__delete"
                />
                <Button
                    text="Удалить"
                    onClick={onClick}
                    customClass="todo-item__delete"
                />
            </div>
        )
    }
}
