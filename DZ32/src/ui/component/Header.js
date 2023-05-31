// Core
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
// Parts
import Link from "./Link";

// Engine
import { links } from "../../engine/configs/routers";

function Header() {

    let location = useLocation();
    useEffect(
        () => {

        },
        [location]
    )

    return (
        <header className="header">
            <ul className="header__logo">
                <li><Link type="nav" to={links.main}>ToDo</Link></li>
                <li><Link type="nav" to={links.about}>About</Link></li>
                <li><Link type="nav" to={links.contact}>Contacts</Link></li>
            </ul>
        </header>
    );
}

export default Header;
