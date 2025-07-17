import '../App.css';
import React from 'react';
import {Link} from 'react-router-dom';
import salmanPicture from '../pictures/salmanPicture.jpg';
import IconButton from '../components/IconButton';
import TextButton from '../components/TextButton';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="App-header">
        <img src={salmanPicture} className="salmanPicture"/>
        <h1 className="header">
          <IconButton label = "spotify"/>
          <IconButton label = "soundcloud"/>
          <IconButton label = "instagram"/>
          <IconButton label = "youtube"/>
          <IconButton label = "bandcamp"/>
          <div className="SalmanF_text">SalmanF</div>
        </h1>
          <p className="Dallas">Dallas, TX</p>
          <div><TextButton label = "newTrack_1"/></div>
          <div><TextButton label = "newMix_1"/></div> 
          <div><IconButton label = "email"/></div>
          <Link to="/about" className="AboutMe_link">About Me</Link>
          <div className="versionText" color="black">version 1.0 :)</div>
      </header>
    </div>
  );
}

export default HomePage;
