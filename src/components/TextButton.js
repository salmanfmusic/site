import React from 'react';
import App from '../App.css';
import Zero_gif from '../pictures/Zero_gif.gif';
import Megaman_gif from '../pictures/Megaman_gif.gif'


const TextButton = ({ label }) => {

	let websiteLink = "";
	let buttonText = "";
	let showGif = null;
	
	if (label === "newTrack_2") {
			websiteLink = "https://soundcloud.com/salmanfuwu/themaverickhunters";
			buttonText = "The Maverick Hunters (SoundCloud)";
			showGif = Zero_gif;
	}
	if (label === "newTrack_3") {
			websiteLink = "https://salmanf.bandcamp.com/track/the-maverick-hunters";
			buttonText = "The Maverick Hunters (Bandcamp)";
			showGif = Megaman_gif;
	}
	if (label === "newTrack_1") {
			websiteLink = "https://soundcloud.com/salmanfuwu/lady-gaga-abracadabra-salmanf-here-in-my-garage-remix";
			buttonText = "Lady Gaga - Abracadabra (Remix) (SoundCloud)";
	}
	if (label === "newMix_1") {
			websiteLink = "https://soundcloud.com/salmanfuwu/salmanf-diaspora";
			buttonText = "DIASPORA - SWANA Mix (SoundCloud)";
	}if (label === "newMix_2") {
			websiteLink = "https://youtu.be/pBtDQmcPx48?si=ji3bV__S5pZAiNQm";
			buttonText = "Classic Trance Vinyl Mix (YouTube)";
	}
	if (label === "newMix_3") {
			websiteLink = "https://soundcloud.com/salmanfuwu/salmanf-the-view-part-1-house-mix";
			buttonText = "The View Part 1 - House Mix (SoundCloud)";
	}
	if (label === "newMix_4") {
			websiteLink = "https://www.youtube.com/watch?v=7l5Q0Ud3UVQ&t=781s";
			buttonText = "GPL House Series Ep 016 - Hindustani Classics, Arabic Funk (YouTube)";
	}
	if (label === "newMix_5") {
			websiteLink = "https://soundcloud.com/gplhouseseries/gpl-house-series-ep-016-dj";
			buttonText = "GPL House Series Ep 016 - Hindustani Classics, Arabic Funk (SoundCloud)";
	}

	return(
		<a href={websiteLink} target="_blank">
			<button class={`TextButton ${label}`} >
				{buttonText}
				{showGif && (
					<img src={showGif} className="gif"/>
				)}
			</button>
		</a>

	);

};

export default TextButton;