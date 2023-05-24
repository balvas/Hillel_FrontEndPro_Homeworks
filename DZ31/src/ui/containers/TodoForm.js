import React from "react";
import '../pages/main.css';

import Input from "../form/Input";
import Button from "../form/Button";

export default class TodoForm extends React.Component {
    render() {
        const { handleAdd } = this.props;
        return (
            <form
                className="form"
                onSubmit={handleAdd}
            >
                <Input />
                <Button text="Send" />
            </form>
        );
    }
}
