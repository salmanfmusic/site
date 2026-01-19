import '../App.css';
import '../Pictures.css';
import React from 'react';
import {Link} from 'react-router-dom';

import chicle from '../pictures/Chicle_Vinyl.jpg';
import LL_Dil_Se from '../pictures/LL_Dil_Se.jpg';
import standing from '../pictures/Standing.JPG';

function AboutPage() {
  return (
    <div className="AboutPage">
      <header className="AboutPage-header">
        <div className="AboutMe_text" color="black">About Me</div>

        <a href={chicle} target="_blank" rel="noopener noreferrer">
          <img src={chicle} className="AboutMe_Pictures"/>
        </a>
        
        <div className="AboutMe_paragraph">
          SalmanF is a DJ based in Dallas, Texas.
          His digital and vinyl DJ sets range from SWANA region music (South-West Asian/North Africa) 
          to early 2000s trance (although he regularly falls back into Chicago House mixes and 
          pop music blends).
          His approach is intentional and immersive - shaped by years of crate-digging, producing, 
          and living the genres he loves to play. 
        </div>

        <a href={LL_Dil_Se} target="_blank" rel="noopener noreferrer">
          <img src={LL_Dil_Se} className="AboutMe_Pictures"/>
        </a>

        <div className="AboutMe_paragraph">
          SalmanF also produces, mixes, and masters original tracks ranging from deep
          house, classic trance, and the occasional edit.
        </div>

        <a href={standing} target="_blank" rel="noopener noreferrer">
          <img src={standing} className="AboutMe_Pictures"/>
        </a>

        <div className="AboutMe_paragraph">
          SalmanF loves to have fun :)
        </div>

        <div><Link to="/" className="AboutMe_link">Home Page</Link></div>

        <div className="versionText" color="black">version 1.1 :)</div>
      </header>

    </div>
  );
}

export default AboutPage;