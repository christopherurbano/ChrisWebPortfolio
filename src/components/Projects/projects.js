import React from "react";
import "./projects.css"
import mathImg from '../../assets/math.png';
import webImg from '../../assets/website.png';
import broomImg from '../../assets/broom.png';


function Projects(){
    return (
        <section id = 'projects'>
        <span class = 'projectHeader'>My Projects</span>

        <div className="projectBars">

          <div className="projectBar">
            <img src={webImg} alt="devOps" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Personal Portfolio Website</h2><br />
              <p>My Personal Portfolio Website, built using React JS, offers a sleek showcase of my skills and projects. Featuring a modern interface, it provides an engaging user experience, demonstrating my proficiency in web development. Visitors can seamlessly explore my work, bio, and contact details, showcasing my strong capabilities in both coding and design.</p>
            </div>
          </div>

          
          <div className="projectBar">
            <img src={broomImg} alt = "UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>VR Video Game in Unreal Engine</h2><br />
              <p>BlastZone VR is a straightforward virtual reality game developed using Unreal Engine as a group project to introduce basic VR capabilities. Set in a simple virtual environment, the game challenges players to navigate through levels by targeting and blasting objects while avoiding rudimentary traps. Players must utilize an aiming tool to shoot at targets, managing their progress by collecting ammo and health pickups to sustain their journey through each level. The gameplay involves basic coordination and planning, serving as an introductory experience into VR development and the potential of immersive gaming technology.</p>
            </div>
          </div>

          <div className="projectBar">
            <img src={mathImg} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Conways Game of Life</h2><br />
              <p>Conway's Game of Life in C++ is a project aimed at illustrating the mesmerizing beauty of mathematical patterns. Through my implementation of Conway's Game of Life in C++, I bring to life the elegant emergence of complexity from simple rules. Delve into this interactive exploration of math and computation as you witness the dynamic evolution of patterns on a grid. Join me in experiencing the captivating elegance of Conway's creation firsthand, where the magic of mathematics truly comes alive through programming. Feel free to click the math icon on the left to see the github for it.</p>
            </div>
          </div>
          <div className="projectBar">
            <img src={mathImg} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Shippy</h2><br />
              <p>"Shippy" is a collaborative, network-based game modeled after the classic Battleship, which I developed with a team using Python and sockets. This project was part of a computer science course and aimed to deepen our understanding of network communication protocols by engaging us in practical application through game development. Each player strategically places ships on a virtual grid, and the game unfolds as players alternate turns guessing their opponent’s ship locations. Leveraging Python sockets, we enabled real-time player communication over a local server, making the gameplay interactive and exciting. This group project not only bolstered my technical skills in Python and network communications but also enhanced my abilities in teamwork and strategic planning in a software development context.</p>
            </div>
          </div>

          <div className="projectBar">
            <img src={mathImg} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Python File Organizer</h2><br />
              <p>Conway's Game of Life in C++ is a project aimed at illustrating the mesmerizing beauty of mathematical patterns. Through my implementation of Conway's Game of Life in C++, I bring to life the elegant emergence of complexity from simple rules. Delve into this interactive exploration of math and computation as you witness the dynamic evolution of patterns on a grid. Join me in experiencing the captivating elegance of Conway's creation firsthand, where the magic of mathematics truly comes alive through programming. Feel free to click the math icon on the left to see the github for it.</p>
            </div>
          </div>

            
      
          

        </div>
    </section>

    )
}
export default Projects;