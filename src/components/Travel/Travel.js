import React, { Component } from 'react';
import './style.css';

import { Grid, Row, Col} from 'react-bootstrap';

import Slider from "../Slider";
import TravelTips from "../TravelTips";


class Travel extends Component {
	render() {
    	return (
    		<div className="travel" id="travel">
            <Grid>
                <Row>
                    <Col xs={6} md={6} className="right"/>
                    <Col xs={6} md={6} />
                </Row>
                <Row>
                    <Col xs={12} md={12} >
                        <h4>GETTING THERE</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={3} />
                    <Col xs={12} sm={12} md={6}><p>The following airports are under 3 hours drive from Castello Tabiano.</p></Col>
                    <Col xs={12} sm={12} md={3} />
                </Row>
            </Grid>
            <Slider />
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={3} />
                    <Col xs={12} sm={12} md={6}> <p>Check Norwegian Air for budget flights. Once you’re in London, Paris, Barcelona, check for
                separate connecting flights on EasyJet, RyanAir, Vueling or other cheaper carriers. For Star
                Alliance Loyalists - connect to Milan Linate through Frankfurt.</p></Col>
                    <Col xs={12} sm={12} md={3} />
                </Row>
            </Grid>
            <TravelTips />
    		</div>
    	)
	}
}
export default Travel;
