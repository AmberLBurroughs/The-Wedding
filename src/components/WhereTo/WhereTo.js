import React from "react";
import "./style.css";


const WhereTo = (props) =>{
	return(
		<div className="locations where-to">
			{props.locations.map((location, index) => (
				<div  key={index} className={`${location.locationClass} clearfix location-img`}>
					<h1>{location.title}</h1>
					<p className="location-info">{location.description}</p>
				</div>

			))}
		</div>
	);
}

export default WhereTo;
