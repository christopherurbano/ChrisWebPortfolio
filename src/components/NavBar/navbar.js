import React, { useState, useEffect } from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import { Link } from 'react-scroll';

function Navbar() {
    const [isContactOpen, setContactOpen] = useState(false);

    // Close the dropdown if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (isContactOpen && !event.target.closest(".contactWidget")) {
                setContactOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isContactOpen]);

    return (
        <nav className="navbar">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} className="desktopMenuListItem">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            <div className="desktopMenu">
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} className="desktopMenuListItem">Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} className="desktopMenuListItem">About</Link>
            </div>
            <div className="contactWidget">
                <button className="desktopMenuBtn" onClick={() => setContactOpen(!isContactOpen)}>
                    <img src={contact} alt="Contact" className="desktopMenuImg"/>Contact Me
                </button>
                {isContactOpen && (
                    <div className="contactDropdown">
                        <a href="mailto:chrisurbano5280@gmail.com" className="dropdownItem">Email Me</a>
                        <a href="https://www.linkedin.com/in/chris-urbano-202596265" target="_blank" className="dropdownItem">
                            <img src={linkedinIcon} alt="LinkedIn" className="dropdownImg" />LinkedIn
                        </a>
                        <a href="https://github.com/christopherurbano" target="_blank" className="dropdownItem">
                            <img src={githubIcon} alt="GitHub" className="dropdownImg" />GitHub
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
