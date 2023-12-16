import React, { useState } from 'react';
import styles from "./Header.css";

function Header() {
    const [open, setOpen] = useState(false);

    const navItems = [
        <a className="navTitles" href="#about">ABOUT</a>, 
        "PROJECTS", 
        "CONTACT"
    ];

    const onTabClick = () => {
        setOpen(!open);
    };

    return (
        <div className="item">
            <h1>Chase Tramel</h1>
            <div className="tabMenu">
                <div className="mainRect">
                    <nav>
                        {open && navItems.map((item, index) => (
                            <p  key={index}>{item}</p>
                        ))}
                    </nav>
                </div>
                <div className="tab" onClick={onTabClick}>
                    <img className={open ? "flipped" : ""} src="/arrow.svg" />
                </div>
            </div>
        </div>
    );
}

export default Header;
