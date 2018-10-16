import React from "react";
import "./style.css";
import { Grid, Row, Col} from 'react-bootstrap';

// change to class add state for rooms and map them
const Rooms = () =>{
	return(
		<div className="rooms">
			<Grid>
				<Row>
					<Col xs={12} sm={12} md={12}>
						<h1>Rooms</h1>
						<p>(per night, including VAT):</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={6} >
						<div className="room-info room-img standard">
							<h1>Standard</h1>
							<h1>125 euros per night</h1>
							<p>Rooms of 20 square meters, overlooking the park and/or village and castle.</p>
						</div>
					</Col>
					<Col xs={12} sm={12} md={6} >
						<div className="room-info room-img superior">
							<h1>Superior</h1>
							<h1>150 euros per night</h1>
							<p>Rooms of 25 square meters, equipped with either an antique tub, whirlpools, or showers. Some
							rooms equipped with an additional bed often includes fireplace, overlooking the park and/or village
							and castle.</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={6} >
						<div className="room-info room-img junior">
							<h1>Junior Suite</h1>
							<h1>160 euros per night</h1>
							<p>Rooms of 35 square meters, equipped with an antique bathtub or whirlpool. Some rooms may
							include a lounge, kitchenette, often includes fireplace, and the possibility for additional beds,
							panoramic views of the park and/or village and castle.</p>
						</div>
					</Col>
					<Col xs={12} sm={12} md={6} >
						<div className="room-info room-img suite">
							<h1>Suite 175 euros</h1> <h1>Imperial Suite 185 euros</h1>
							<h1>per night</h1>
							<p>Room and living room of approx. 40 square meters, equipped with either an antique bathtub or
							whirlpool, nearly all include a fireplace and possibility for additional beds. Very scenic view of the
							park, the village and/or castle. Some of these suites are located in the XIIIs guards’ tower with
							breathtaking views.</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={6} >
						<div className="room-info room-img apartment">
							<h1>Apartment</h1><h1>250 euros per night</h1>
							<p>Rooms from 60 to 80 square meters and 4/6 beds, with one or two bathrooms, living room, and
							kitchen, the possibility for additional beds, ideal for families.</p>
						</div>
					</Col>
					<Col xs={12} sm={12} md={6}>
						<div className="download">
							<Row>
								<Col xs={12} sm={12} md={12} className="room-d">
									<form method="get" action="./assets/docs/RoomDescriptions.pdf">
										 <button type="submit"><h1>download room description</h1></button>
									</form>
								</Col>
								<Col xs={12} sm={12} md={12} className="map-p">
									<form method="get" action="./assets/docs/Map.pdf">
										<button type="submit"><h1>download map of property</h1></button>
									</form>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>

			</Grid>
		</div>
	);
}

export default Rooms;
