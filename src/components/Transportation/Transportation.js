import React from "react";
import "./style.css";
import { Grid, Row, Col} from 'react-bootstrap';


const Transportation = () =>{
	return(
		<div className="transportation">
			<Grid>
				<Row>
					<Col xs={12} sm={12} md={12}>
					<Row>
						<Col xs={12} sm={12} md={2}/>
						<Col xs={12} sm={12} md={8}>
							<h1>Car</h1>
							<p>Driving in Italy is as pleasurable as a chilled Lambrusco at sunrise. Well-maintained, beautiful
							roads. Signs are plentiful and GPS works perfectly. You’ll find that rental cars are reasonable.
							And on that windy road up to the castle, you will thank yourself for shelling out a few extra Euros for
							the Mercedes or Alfa Romeo convertible. We’ve had the best luck with Hertz and Sixt.
							We recommend shopping around on carrentals.com, hotwire.com, and kayak.com.</p>
						</Col>
						<Col xs={12} sm={12} md={2}/>
					</Row>

					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={12}>
					<Row>
						<Col xs={12} sm={12} md={2}/>
						<Col xs={12} sm={12} md={8}>
							<h1>Train</h1>
							<p>The nearest train station is Fidenza, which is 20 minutes away. By direct train, Fidenza is
							approximately 1:15 from Milan and Bologna. For schedules see www.trenitalia.com. Tabiano will
							organize taxi and chauffeured car services to/from the railway.</p>
						</Col>
						<Col xs={12} sm={12} md={2}/>
					</Row>

					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={12} md={12}>
					<Row>
						<Col xs={12} sm={12} md={2}/>
						<Col xs={12} sm={12} md={8}>
							<h1>Chauffeur &amp; Taxi</h1>
							​<p>Contact Tabiano directly for arrangements.</p>
						</Col>
						<Col xs={12} sm={12} md={2}/>
					</Row>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}

export default Transportation;
