import React from "react";
import "./style.css";

import { Row, Col} from 'react-bootstrap';


const Schedule = (props) =>{
	return(
		<div className="schedule container-fluid">
			<Row className="dressCode clearfix align-items-stretch">
			{props.dressCode.map((attire, index) => (
				<Col key={index} xs={12} sm={12} md={4} className={`${attire.attireClass} attire-info clearfix`}>
					<h1>{attire.title}</h1>
					<p>{attire.description}</p>
					<a href={attire.link}><img className="arrowRight" src="/assets/img/ArrowRight.png" alt="click here"/></a>
				</Col>

			))}
			</Row>
		</div>
	);
}

export default Schedule;
