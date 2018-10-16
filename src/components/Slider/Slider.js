import React, { Component } from 'react';
import './style.css';

import { Row, Col, Carousel} from 'react-bootstrap';

// import Slider from "../Slider";
// import TravelTips from "../TravelTips";


class Slider extends Component {
	render() {
    	return (
    		<div className="slider">


    		<Carousel controls={false} pauseOnHover={true} >
			  	<Carousel.Item>
				  <Row>
				  	<Col xs={12} sm={12} md={4}>
					  	<img alt="Milan Linate" src="/assets/img/Milan.png" />
						<Carousel.Caption>
						  <h3>Milan Linate &#8226; LIN</h3>
						  <p>72 Miles</p>
						</Carousel.Caption>
				  	</Col>
				  	<Col xs={12} sm={12} md={4}>
				  		<img alt="Milan Linate" src="/assets/img/Bologna.png" />
						<Carousel.Caption>
						  <h3>Bologna Guglielmo Marconi &#8226; BLQ</h3>
						  <p>77 Miles</p>
						</Carousel.Caption>
				  	</Col>
				  	<Col xs={12} sm={12} md={4}>
				  		<img alt="Milan Linate" src="/assets/img/Milan.png" />
						<Carousel.Caption>
						  <h3>Milan Bergamo &#8226; BGY</h3>
						  <p>97 Miles</p>
						</Carousel.Caption>
				  	</Col>
				  </Row>
			  	</Carousel.Item>
			  	<Carousel.Item>
				  <Row>
				  	<Col xs={12} sm={12} md={4}>
					  	<img alt="Milan Linate" src="/assets/img/Milan.png" />
						<Carousel.Caption>
						  <h3>Milan Malpensa &#8226; MXP</h3>
						  <p>106 Miles</p>
						</Carousel.Caption>
				  	</Col>
				  	<Col xs={12} sm={12} md={4}>
				  		<img alt="Milan Linate" src="/assets/img/Florence.png" />
						<Carousel.Caption>
						  <h3>Florence &#8226; FLR</h3>
						  <p>130 Miles</p>
						</Carousel.Caption>
				  	</Col>
				  	<Col xs={12} sm={12} md={4}>
				  		<img alt="Milan Linate" src="/assets/img/Venice.png" />
						<Carousel.Caption>
						  <h3>Venice Marco Polo &#8226; VCE</h3>
						  <p>177 Miles</p>
						</Carousel.Caption>
				  	</Col>
				  </Row>
			  </Carousel.Item>

			</Carousel>
    		</div>
    	)
	}
}
export default Slider;
