import React, { Component } from 'react';
import './style.css';
import { Grid, Row, Col} from 'react-bootstrap';

import Rooms from "../Rooms";
import Booking from "../Booking";

class Accomidations extends Component {
	render() {
    	return (
    		<div className="accomidations" id="accomidations">
    			<Grid>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                        <h4>ACCOMMODATIONS</h4>
                        <h1>il castello di tabiano</h1>
                        </Col>
                    </Row>
        			<Row>
                        <Col xs={12} sm={12} md={4}/>
        				<Col xs={12} sm={12} md={4}>
    						<p>You’re all part of our Royal Family and invited to stay at the Castle. We have exclusive use of the village
    						and castle for two nights September 4-6. All rooms are equipped with air conditioning, flat screen TV, “high
    						speed” internet and a minibar. There are 6 room sizes/types, described below.</p>
    						<p>We will be staying in Room 104.</p>
                            <p>Check-in Time: 1500 Check-out Time: 1200</p>
                            <span className="text-right"><i><sup>&#42;</sup>Italian Time.</i></span>
                             <hr/>
        				</Col>
                        <Col xs={12} sm={12} md={4}/>

        			</Row>

    			</Grid>
    			<Rooms />
    			<Booking />
    		</div>
    	)
	}
}
export default Accomidations;
