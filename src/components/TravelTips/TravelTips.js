import React from "react";
import "./style.css";
import { Grid, Row, Col} from 'react-bootstrap';


const TravelTips = () =>{
	return(
		<div className="travel-tips">
		<Grid>
			<Row>
				<Col xs={6} sm={6} md={3}>
					<img src="/assets/img/GoogleFlightsLink.png" alt="" className="travel-tip-img"/>
					<p><a href="https://www.google.com/flights">google.com/flights</a></p>
					<p>is the best tool for searching for flights.</p>
				</Col>
				<Col xs={6} sm={6} md={3}>
					<img src="/assets/img/SkiplaggedLink.png" alt="" className="travel-tip-img"/>
					<span className="slash"> / </span>
					<img src="/assets/img/HipmunkLink.png" alt="" className="travel-tip-img"/>
					<p><a href="https://skiplagged.com/">skiplagged.com &</a> <a href="https://www.hipmunk.com/">hipmunk.com</a></p>

					<p>recommended by Gabe, the prince of finding travel deals.</p>
				</Col>
				<Col xs={6} sm={6} md={3}>
					<img src="/assets/img/HopperLink.png" alt="" className="travel-tip-img"/>
					<p><a href="https://www.hopper.com/">hopper.com</a></p>
					<p>is a great mobile app that hunts flight deals.</p>
				</Col>
				<Col xs={6} sm={6} md={3}>
					<img src="/assets/img/LacompagnieLink.png" alt="" className="travel-tip-img"/>
					<p><a href="https://www.lacompagnie.com/">lacompagnie.com</a></p>
					<p>for reasonable business class flights from EWR to Paris</p>
				</Col>
			</Row>
		</Grid>
		</div>
	);
}

export default TravelTips;
