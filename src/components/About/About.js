import React, { useState } from 'react';
import "./About.css";

function About() {
    const [open, setOpen] = useState(false);

    const longAbout = [
        "I enjoy creating cool stuff that looks great and works even better. I'm passionate about web development because I can work with great teams to build products that truly impact people’s lives. ",
        "My life experience has developed me into a tech generalist with strong programming and design skills. I love discovering new and creative ways to solve with technology. ",
        "I'm on the lookout for new opportunities to collaborate and grow, especially if they involve refining my React and UI design skills. I live in Central Florida, and I’m only able to accept jobs that are fully remote or based in the Orlando area. ",
        <>If you're interested in collaborating with me on a project, feel free to shoot me an email at <a className="email" href="mailto:hello@chasetramel.com">hello@chasetramel.com</a>.</>
    ]

    const onTabClick = () => {
        setOpen(!open);
    };

    return (
        <div className="item">
           <h2 id="about">ABOUT</h2>
           <div className="tabMenu">
                <div className="mainRect">
                    <div className="aboutElements">
                        <p>Hello there!</p>
                        <p>I’m Chase Tramel, a web developer and designer</p>
                        <p>I love creating interesting and useful things with the web.</p>
                        {open && longAbout.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className="tab" onClick={onTabClick}>
                    <img className={open ? "flipped" : ""} src="/arrow.svg" />
                </div>
           </div>
        </div>
    )
}   

export default About;
