import React from 'react';
import App from '../App.css';


const TextButton = ({ label }) => {

	let websiteLink = "";
	let buttonText = "";

	if (label === "newTrack_1") {
			websiteLink = "https://soundcloud.com/salmanfuwu/lady-gaga-abracadabra-salmanf-here-in-my-garage-remix";
			buttonText = "Lady Gaga - Abracadabra (Remix) (SoundCloud)";
	}
	if (label === "newMix_1") {
			websiteLink = "https://soundcloud.com/salmanfuwu/salmanf-diaspora";
			buttonText = "DIASPORA (SWANA Region Mix)";
	}if (label === "newMix_2") {
			websiteLink = "https://youtu.be/pBtDQmcPx48?si=ji3bV__S5pZAiNQm";
			buttonText = "Classic Trance (Vinyl Mix - YouTube)";
	}
	if (label === "newMix_3") {
			websiteLink = "https://soundcloud.com/salmanfuwu/salmanf-the-view-part-1-house-mix";
			buttonText = "The View Part 1 - House Mix (SoundCloud)";
	}
	if (label === "newMix_4") {
			websiteLink = "https://www.youtube.com/watch?v=U6MN3riq0OE";
			buttonText = "The View Part 1 - House Mix (YouTube)";
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