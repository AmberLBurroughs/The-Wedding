import React from "react";
import "./style.css";
import { Grid, Row, Col} from 'react-bootstrap';


const Welcome = () =>{
	return(
		<div className="welcome" id="details">
		<Grid>
			<Row className="show-grid">
				<Col xs={12} sm={12}  md={12}>
				  <h4>details</h4>
				</Col>
			</Row>
		  	<Row className="show-grid">
		    	<Col xs={12} sm={12}  md={12}>
		      		<h1>buingiorno friends and family</h1>
		    	</Col>
		  	</Row>

			<Row className="show-grid">
			    <Col xs={12} sm={12} md={2} />
			    <Col xs={12} sm={12} md={4}>
			     	<p className="text-left">Italy is a very special place for us and we are so happy you&#700;ll join us for our celebration in Emilia Romagna! On our first journey to Italy together&#44; we visited Bologna and took a road trip through this region.  Since then we’ve returned to Italy for several milestones &#8209; spending our first Christmas together in Venice&#44; getting engaged in Capri and devouring white truffle season in Piedmont. We even have an &ldquo;Italy Pact&rdquo;  to return to Italy each year we are together. Everywhere we’ve traveled on the boot has charms&#44; but Emilia Romagna stands out as the most delicious.</p>
			    </Col>
			    <Col xs={12} md={4}>
			    	<p className="text-left">It is a dream come true to host all of you.
					Our official wedding events will begin on Tuesday afternoon&#44; September 4.  Please plan to arrive at the castle by 3 pm that day. Even better&#44; if you can join us a day early on September 3 we will kick things off right by sampling some specialties of the region (Parmesan&#44; Culatello&#44; Ferrari).
					</p><p className="text-left">If you have any questions at all&#44; don&#700;t hesitate to reach out to one of us (although Matt will probably just tell you to ask Tina).</p>
			    </Col>
			    <Col xs={12} sm={12} md={2}/>
		  	</Row>
		</Grid>
		</div>
	);
}

export default Welcome;
