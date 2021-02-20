import React from "react";
import './contact.css';
import twitter from '../images/twitter.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import mail from '../images/mail.png';

function About() {
  return (
    <div className="divAbout">
      <div class="container">
          <h1>Contact</h1>
          <div className = 'divIcons'>
              <a href = 'https://twitter.com/Sgt_PEpp3R' target = '_blank'>
                <img src = {twitter} width = '50' height = '50'/>
              </a>
              <a href = 'https://github.com/v01d13' target = '_blank'>
                <img src = {github} width = '50' height = '50'/>
              </a>
              <a href = 'https://www.linkedin.com/in/v01d13/ ' target = '_blank'>
                <img src = {linkedin} width = '60' height = '30'/>
              </a>
              <a href = "mailto:ashesh.rai666@gmail.com" target = '_blank'>
                <img src = {mail} width = '80' height = '70'/>
              </a>
        </div>
      </div>
    </div>
  );
}

export default About;
