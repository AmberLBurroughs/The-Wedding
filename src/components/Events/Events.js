import React from "react";
import "./style.css";
import { Grid, Row, Col} from 'react-bootstrap';


const Events = () =>{
	return(
		<div className="events" id="schedule">
			<Grid>
				<Row>
					<Col xs={12} sm={12} md={12}>
						<h1>SCHEDULE OF EVENTS</h1>
					</Col>
				</Row>
				<Row className="align-items-stretch">
					<Col xs={12} sm={12} md={3} className="first event-info align-self-stretch">
						<Row>
							<Col xs={12} sm={12} md={12} className="events-titles">
								<h4>The Arrival</h4>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={6} className="event-txt">
								<img className="event-img" src="/assets/img/Soiree.png" alt=""/>
								<p>Summer Soiree</p>
								<p>1400</p>
							</Col>
							<Col xs={6} sm={6} md={6} className="event-txt">
								<img className="event-img" src="/assets/img/Dinner.png" alt=""/>
								<p>Welcome Dinner</p>
								<p>2000</p>
							</Col>
						</Row>
						<Row>
							<Col xs={12} sm={12} md={12} className="events-date">
								<h3>September 4<sup>th</sup></h3>
							</Col>
						</Row>
					</Col>
					<Col xs={12} sm={12} md={6} className="event-info align-self-stretch">
						<Row>
							<Col xs={12} sm={12} md={12} className="events-titles">
								<h4>The Wedding</h4>
							</Col>
						</Row>
						<Row>
							<Col xs={1} sm={1} md={1} className="event-txt"/>
							<Col xs={2} sm={2} md={2} className="event-txt">
								<img className="event-img" src="/assets/img/Apertivo.png" alt=""/>
								<p>Apertivo</p>
								<p>1700</p>
							</Col>
							<Col xs={2} sm={2} md={2} className="event-txt">
								<img className="event-img" src="/assets/img/TeaCeremony.png" alt=""/>
								<p>Tea/Ceremony</p>
								<p>1730&#42;</p>
							</Col>
							<Col xs={2} sm={2} md={2} className="event-txt">
								<img className="event-img" src="/assets/img/Apertivo2.png" alt=""/>
								<p>Apertivo</p>
								<p>1830</p>
							</Col>
							<Col xs={2} sm={2} md={2} className="event-txt">
								<img className="event-img" src="/assets/img/Reception.png" alt=""/>
								<p>Reception</p>
								<p>1930</p>
							</Col>
							<Col xs={2} sm={2} md={2} className="event-txt">
								<img className="event-img" src="/assets/img/AfterParty.png" alt=""/>
								<p>After Party....</p>
							</Col>
							<Col xs={1} sm={1} md={1} className="event-txt"/>
						</Row>
						<Row>
							<Col xs={12} sm={12} md={12} className="events-date">
								<h3>September 5<sup>th</sup></h3>
							</Col>
						</Row>
					</Col>
					<Col xs={12} sm={12} md={3} className="last event-info align-self-stretch">
						<Row>
							<Col xs={12} sm={12} md={12} className="events-titles">
								<h4>The Departure</h4>
							</Col>
						</Row>
						<Row>
							<Col xs={12} sm={12} md={12} className="event-txt">
								<img className="event-img" src="/assets/img/Breakfast.png" alt=""/>
								<p>Breakfast</p>
								<p>0800-1100</p>
							</Col>
						</Row>

						<Row>
							<Col xs={12} sm={12} md={12} className="events-date">
								<h3>September 6<sup>th</sup></h3>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={12} className="text-right">
						<span><i><sup>&#42;</sup>Italian Time.</i></span>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}

export default Events;
