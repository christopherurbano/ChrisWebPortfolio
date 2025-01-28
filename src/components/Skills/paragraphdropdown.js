import React, {useState} from "react";
import infoButton from '../../assets/infoIcon.png';
import './paragraphdropdown.css';


const ParagraphDropdown = () => {
    const [showParagraph, setShowParagraph] = useState(false);

    const handleClick = () => {
       setShowParagraph(!showParagraph);
    };
    return (
        <section id='dropdown'>
            <div>
                <button onClick={handleClick} className="button"></button>
                {showParagraph && <p className="dropdownParagraph"> As a computer science student, I've had the opportunity to develop a variety of skills that have proven to be quite valuable in the tech industry. I have a good grasp of programming languages such as Python, Java, and C++, which has allowed me to tackle some complex problems and create innovative software solutions. I've also become familiar with data structures and algorithms, which helps me optimize code for efficiency. One area I'm particularly passionate about is web development, especially working with React. I enjoy working with front-end technologies like HTML, CSS, and JavaScript and love exploring and learning about new frameworks. I'm always eager to adapt and stay up-to-date with the latest trends in web development. My ability to quickly pick up new concepts helps me stay well-prepared to take on challenges in the ever-evolving field of computer science and web development.</p>}
            </div>

        </section>
    );

};
export default ParagraphDropdown;