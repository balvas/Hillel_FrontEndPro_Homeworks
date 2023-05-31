// Core
import { NavLink } from "react-router-dom";

function Link(props) {
    const { to,  children, type } = props;
    return type === 'a'
        ? <a href={to} >{children}</a>
        : <NavLink to={to} >{children}</NavLink>;
}

Link.defaultProps = {
    type: 'a'
}

export default Link;
