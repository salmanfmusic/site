import React from 'react';
import App from '../App.css';


const TextButton = ({ label }) => {

	let websiteLink = "";
	let buttonText = "";

	if (label === "newTrack_1") {
			websiteLink = "https://open.spotify.com/track/6UptcsTY29rqFG4CMxGWFi?si=8a4cfd9346d64508";
			buttonText = "Ariana Grande - Supernatural (Remix)";
	}
	if (label === "newMix_1") {
			websiteLink = "https://soundcloud.com/salmanfuwu/salmanf-diaspora";
			buttonText = "SalmanF - DIASPORA (Mix)";
	}

	return(
		<a href={websiteLink} target="_blank">
			<button class={`TextButton ${label}`} >
				{buttonText}
			</button>
		</a>

	);

};

export default TextButton;