import React, { useState, useRef, useEffect } from "react";
import { Form, Field } from 'react-final-form';
import '../pages/main.css';
import { useStyles } from "../pages/useStyle";

import Button from "../../ui/component/form/Button";

const TodoForm = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const classes = useStyles();

  const onSubmit = (values, form) => {
    handleAdd(values.value);
    form.reset();
    setInputValue("");
  };

  const minValue = min => value =>
    value && value.length <= min ? `Should be greater than ${min}` : undefined;

  const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

  return (
    <Form onSubmit={onSubmit} initialValues={{ value: "" }} >
      {({ handleSubmit, pristine }) => (
        <form className={classes.formStyle} onSubmit={handleSubmit}>
          <div className={classes.formDiv}>
            <Field
              name="value"
              validate={composeValidators(minValue(5))}
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
