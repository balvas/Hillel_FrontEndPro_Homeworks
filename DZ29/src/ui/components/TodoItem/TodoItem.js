import React from "react";

import Button from "../form/Button";

import "./style.css";

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            text: props.text
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);
    }

    handleInputChange(event) {
        this.setState({ text: event.target.value });
    }

    handleEditSubmit() {
        const { id, handleEdit } = this.props;
        const { text } = this.state;
        console.log(text);
        handleEdit(id, text);
        this.toggleEditing();
    }

    toggleEditing() {
        this.setState((prevState) => ({
            editing: !prevState.editing
        }));
    }


    render() {
        const { text, handleRemove, id } = this.props;
        const { editing } = this.state;
        const onClick = () => {
            handleRemove(id);
        }

        return (
            <div className="todo-item">
                {editing ? (
                    <input className='form__edit'
                        type="text"
                        value={this.state.text}
                        onChange={this.handleInputChange}
                    />
                ) : (
                    <div className="todo-item__description">{text}</div>
                )}

                {editing ? (
                    <Button
                        text="Save"
                        onClick={this.handleEditSubmit}
                        customClass="todo-item__delete"
                    />
                ) : (
                    <Button
                        text="Edit"
                        onClick={this.toggleEditing}
                        customClass="todo-item__delete"
                    />
                )}
                <Button
                    text="Удалить"
                    onClick={onClick}
                    customClass="todo-item__delete"
                />
            </div>
        )
    }
}
