import React from "react";
import cx from "classnames";

export default class Button extends React.Component {
    render() {
        const { text, customClass, onClick, type } = this.props;
        const className = cx(
            'form__btn',
            {
                [customClass]: customClass,
                // 'string': Boolean(JS)
            }
        )
        return (
            <button className={className} onClick={onClick} type={type || 'submit'}>{text}</button>
        )
    }
}
