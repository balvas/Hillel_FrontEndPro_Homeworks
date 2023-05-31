import React, { useState } from "react";
import '../pages/main.css';

import Button from "../../ui/component/form/Button";

const TodoForm = ({ handleAdd }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAdd(inputValue);
        setInputValue("");
    };
    const disableInput = inputValue.trim().length === 0 ? true : false;

    return (

        <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="value" placeholder="" className="form__input" onChange={handleChange} />
            <Button text="Отправить" disabled={disableInput} />

        </form>
    );
};

export default TodoForm;
