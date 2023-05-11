import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <>
                <nav className="sidebar">
                    <ul>
                        <li>
                            <a href="#welcome">Welcome</a>
                        </li>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="#galleryone">Gallery One</a>
                        </li>
                        <li>
                            <a href="#secondgallery">Second Gallery</a>
                        </li>
                        <li>
                            <a href="#thirdgallery">Third Gallery</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }

}

export default Sidebar;
