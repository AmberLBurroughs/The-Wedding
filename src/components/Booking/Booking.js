import React from "react";
import "./style.css";
import { Grid, Row, Col} from 'react-bootstrap';


const Booking = () =>{
	return(
		<div className="booking">
			<Grid>
				<Row>
					<Col xs={12} sm={12} md={12}>
						<h1>booking</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={3}/>
					<Col xs={12} sm={12} md={6}>
						<p><strong>Email Tabiano directly</strong> with subject line <strong>Matt/Tina Wedding</strong> and include your first and second room
						choice to <a href="mailto:travel@tabianocastello.com?subject=Matt/Tina Wedding">travel@tabianocastello.com</a>.</p>
					</Col>
					<Col xs={12} sm={12} md={3}/>
				</Row>

				<Row>
					<Col xs={12} sm={12} md={3}/>
					<Col xs={12} sm={12} md={6}>
						<p>They will ask for a 30% deposit at the time of booking by
						asking you to provide your credit card information. Please also let them know if you’d like to arrive
						September 3. If you’re bringing kids and want one of the Apartments of Larger Suites please email
						right away.</p>
					</Col>
					<Col xs={12} sm={12} md={3}/>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={2}/>
					<Col xs={12} sm={12} md={8}>
					<hr/>
					</Col>
					<Col xs={12} sm={12} md={2}/>
				</Row>

			</Grid>
		</div>
	);
}

export default Booking;
