import React from "react";
import "./style.css";

const Media = () =>{
	return(
		<div className="media">
			<audio autoPlay loop src="/assets/music/The Godfather Original Theme Song.mp3" type="audio/mpeg" />
			<a href="mailto:tuvienn@gmail.com"><img src="./assets/img/email.png" alt="email"/></a>
			<a href="https://www.instagram.com/explorer/tags/longuyendid/?hl=en"><img src="./assets/img/instagram.png" alt="instagram"/></a>
		</div>
	);
}

export default Media;
