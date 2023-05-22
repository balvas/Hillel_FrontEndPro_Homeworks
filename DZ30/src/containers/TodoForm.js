import React from "react";
import '../ui/pages/main.css';

import Input from "../components/form/Input";
import Button from "../components/form/Button";

export default class TodoForm extends React.Component {
    render() {
        const { handleAdd } = this.props;
        return (
            <form
                className="form"
                onSubmit={handleAdd}
            >
                <Input />
                <Button text="Отправить" />
            </form>
        );
    }
}
