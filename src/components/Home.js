import React from "react";
import { Slide, Bounce } from 'react-awesome-reveal';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div>
            <div>
            </div>
          </div>
          <Slide className = 'divFade'>
            <div></div>
          </Slide>
          <Bounce className='textBounce'>
                <p style = {{fontSize: '35px', textColor: '#402220'}}>Hello there!!!!!<br/>My name is Ashesh Rai<br/>and I am from Nepal <br/>I love coding and playing games.</p>
          </Bounce>
        </div>
      </div>
    </div>
  );
}

