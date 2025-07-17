import React from 'react';
import App from '../App.css';

import spotifyLogo from '../pictures/spotifyLogo.png';
import soundcloudLogo from '../pictures/soundcloudLogo.png';
import instagramLogo from '../pictures/instagramLogo.png';
import youtubeLogo from '../pictures/youtubeLogo.png';
import bandcampLogo from '../pictures/bandcampLogo.png';
import emailLogo from '../pictures/emailLogo.png';

const IconButton = ({ label }) => {

	let websiteLink = "";
	let image;

	if (label === "spotify") {
			websiteLink = "https://open.spotify.com/artist/2texriy6n1Y0h8Msrm1wUg?si=ZWYBAeU7Tjina93R4njq3Q"
			image = spotifyLogo;
	}
	if (label === "soundcloud") {
			websiteLink = "https://soundcloud.com/salmanfuwu"
			image = soundcloudLogo;
	}
	if (label === "instagram") {
		websiteLink = "https://www.instagram.com/salmanf___/"
		image = instagramLogo;
	}
	if (label === "youtube") {
		websiteLink = "https://www.youtube.com/@salmanfuwu"
		image = youtubeLogo;
	}
	if (label === "bandcamp") {
		websiteLink = "https://salmanf.bandcamp.com/"
		image = bandcampLogo;
	}
	if (label === "email") {
		websiteLink = 'mailto:sfmusicandbooking@gmail.com';
		image = emailLogo;
	}
	return(
		<a href={websiteLink} target="_blank">
			<button class={`IconButton ${label}`}>

				<img src={image} height="60" alt={`${label} logo`} />
			</button>
		</a>

	);

};

export default IconButton;