import '../../main.css';
import { Form, Field } from 'react-final-form';

import Button from "../components/form/Button";

import { handleAddTodo } from "../../engine/core/todos/thunks";
import { useDispatch } from "react-redux";

import { useStyles } from "../pages/useStyle"


function TodoForm() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleAdd = (values) => { dispatch(handleAddTodo(values)); };

    const onSubmit = (values, form) => {
        handleAdd(values.value);
        form.reset();
    };

    return (
        <Form onSubmit={onSubmit} initialValues={{ value: "" }} >
            {({ handleSubmit, pristine }) => (
                <form className={classes.formStyle} onSubmit={handleSubmit}>
                    <div className={classes.formDiv}>
                        <Field
                            name="value"
                        >
                            {({ input, meta }) => (
                                <>
                                    <input
                                        {...input}
                                        type="text"
                                        placeholder=""
                                        className={classes.formInput}
                                    />
                                    {meta.touched && meta.error && (
                                        <span className={classes.error__message}>{meta.error}</span>
                                    )}
                                </>
                            )}
                        </Field>
                    </div>

                    <Button text="Отправить" type="submit" disabled={pristine} />

                </form>
            )}
        </Form>
    );
};

export default TodoForm;
