import React from "react";
import './skills.css'
import ParagraphDropdown from "./paragraphdropdown";
import devLogo from "../../assets/devLogo.png";
import UIDesign from "../../assets/UIDesign.png";



function Skills() {
  return (
    <section id = 'skills'>
        <span class = 'skillHeader'>My Skill Set </span>
        <ParagraphDropdown/>

        <div className="skillBars">

          <div className="skillBar">
            <img src={devLogo} alt="devOps" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Software Engineering</h2><br />
              <p>
              In my "Software Engineering" course at Colorado State University (CS314), I honed my skills in software development methodologies, particularly Scrum and Agile. These methodologies guided our group projects, where I played a key role in navigating the project development cycles to deliver robust software solutions. My responsibilities included organizing tasks and promoting a collaborative environment, ensuring that our projects met deadlines and adhered to the specified requirements. I adapted to changing project needs and maintained open lines of communication within the team, which were crucial for achieving successful project outcomes. This experience has equipped me with a practical understanding of managing software projects effectively in real-world settings.</p>
            </div>
          </div>

          
          <div className="skillBar">
            <img src={UIDesign} alt = "UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Programming Languages</h2><br />
              <p>Over the years, I've developed a strong proficiency in a variety of coding languages and frameworks, continually expanding and refining my expertise. My technical repertoire includes advanced skills in Java, JavaScript, Python, C++, C, and SQL. Additionally I like working with frameworks and libraries such as React and PyTorch. This diverse skill set not only enhances my versatility but also enables me to tackle complex challenges across different aspects of software development and data-driven innovation.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={UIDesign} alt = "UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Database Managment</h2><br />
              <p>I have a solid background in database management, where I've gained practical skills in designing, implementing, and maintaining databases. Proficient in SQL, I've worked with various database systems to organize, retrieve, and manage data effectively. My experience includes optimizing database queries, ensuring data integrity, and implementing security measures to protect sensitive information.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={UIDesign} alt = "UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Modern cybersecurity</h2><br />
              <p>
              In my "Modern Cyber Security" course at Colorado State University, I studied the scientific principles of cybersecurity, focusing on protecting information privacy and integrity. We explored theoretical underpinnings rather than just practical tools, crucial in understanding the fast-changing tech landscape. I learned about various security mechanisms, including those that could compromise network security, and got hands-on experience coding different encryption mechanisms. Additionally, the course covered AI-driven malware detection, enhancing my ability to address and mitigate sophisticated cyber threats. We also tackled the critical issue of user privacy, emphasizing the protection of sensitive information from misuse, not just unauthorized access. This comprehensive approach equipped me with a deep understanding of the complexities involved in safeguarding data in a world where digital systems and social networking are pervasive.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={UIDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Networks and the Internet</h2><br />
              <p>
              In my "Networks and the Internet" class at Colorado State University, I explored the core concepts of computer networking and network protocols, gaining a solid understanding of network layer functions and interactions. We extensively discussed application and transport layer protocols, network security basics, and the use of network analysis tools. A significant part of my practical experience involved using Wireshark, a powerful network protocol analyzer, allowing me to inspect network traffic in real-time and enhance my skills in network troubleshooting and security analysis. This hands-on application helped me connect theoretical knowledge with real-world networking challenges..

        



</p>
            </div>
          </div>

            
      
          

        </div>
    </section>
  );
}

export default Skills;

// Add three sections below the paragraph section. Im thinking Web/App development, and Algorithms and Data Structures, Software Development and tools 
