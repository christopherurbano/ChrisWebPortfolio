import React from "react";
import Typewriter from "./typewrite";
import avatar from '../../assets/avatar.png';
import btnImg from '../../assets/download.png';
import resume from '../../assets/chris-urbano-resume.pdf';
import './intro.css';
import { Link } from 'react-scroll';





function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
        
        <span className="hello"><Typewriter text="Hi my name is" delay={100} /></span>
        <span className="introName">Chris Urbano.</span>
        <span className="introText">I like to code stuff.</span>
        <p class="introPara">
        Hey there, welcome to my portfolio! I'm a senior at Colorado State University, majoring in Computer Science. Here, you'll find a mix of my projects, skills, and what I've learned in class. As I embark on my career. I'm deeply engaged in cybersecurity, artificial intelligence, and software engineering. With competencies in Java, JavaScript, Python, C, C++, and SQL, and hands-on Agile and Scrum experience. I love using creativity and critical thinking to deliver amazing digital solutions.
        </p>
        <a href={require('../../assets/chris-urbano-resume.pdf')} download="Chris-Urbano_Resume"><button className="btn"><img src={btnImg} alt="btnIMG" className="btnImg"/>resume/csv</button></a>
        </div>
  
        <img src={avatar} resizeMode="cover" alt="Profile" className="bg"/>


    </section>
    
  );
}

export default Intro;
