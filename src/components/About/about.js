import React from "react";
import "./about.css"
import aboutImage from "../../assets/me.JPG";
import { animateScroll } from "react-scroll";


function About(){
    return (
        
        <section id='about'>
            <span className="aboutHeader">A little about myself.</span>
            <span className= "aboutParagraph">Hi i'm Chris. I am from Littleton, Colorado and a Computer Science student at Colorado State University. Beyond my academic pursuits, I cherish moments spent with my beloved dog Nova and the cherished company of friends and family. In my free time, I find solace in creating music and diving into programming projects. Whether I'm crafting tunes or coding algorithms, I'm fueled by a passion for creativity and a drive to expand my skills.</span>
            <img src = {aboutImage} resizeMode="cover" className="aboutImage" ></img>
        </section>

    )
}
export default About;