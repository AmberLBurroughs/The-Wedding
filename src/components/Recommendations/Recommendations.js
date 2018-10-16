import React from "react";
import "./style.css";
import { Grid, Row, Col} from 'react-bootstrap';

import WhereTo from "../WhereTo";



class Recommendations extends React.Component{
	state = {
		locations:[
			{
				title:"Lake Orta",
				locationClass:"lake-o",
				description:"If we were you, we’d get to Italy a few days before the wedding. We’d use that time to explore Lake Orta, north of Milan. We’d stay at Casa Fantini or one of the hotels in Orta San Giulio. We’d work off the jetlag with a morning walk up to Sacred Mount of Orta, where we’d be the only souls enjoying views over the Isla Giulio and exploring the 20 ancient temples dedicated to the life of St. Francis of Assisi. We’d sip espresso in the Piazza, waving at the fishermen. Then have a fancy 2 Star lunch at Villa Crespi (reservation required)."
			},
			{
				title:"Tuscany",
				locationClass:"tuscany",
				description:"After the wedding, we’d drive down to Southern Tuscany. We’d stay near Pienza at La Bandita or La Bandita townhouse. Or somewhere near Montalcino. We’d drink amazing Brunello and explore hilltop villages and wine country trattoria."
			},
			{
				title:"Amalfi Coast",
				locationClass:"amalfi-c",
				description:"Or to go all out, make your way to the Amalfi Coast. Easy flight to Naples and ferry to the most stunning seaside destination in the world. Stay a few nights Capri and Positano separately and make a day trip to Ravello. Spend your days at the beach eating fresh seafood at Da Adolfo in Positano and La Fontelina in Capri."
			}
		]
	}
	render(){
	return(
		<div className="recommendations">
		<Grid>
		<Row>
			<Col xs={12} sm={12} md={12}>
				<h4>RECOMMENDATION FOR BEFORE & AFTER</h4>
			</Col>
		</Row>
		<Row>
		<Col xs={12} sm={12} md={3} />
		<Col xs={12} sm={12} md={6}>
			<p>For those spending Labor Day weekend in Italy, Tina recommends a pre-wedding visit to the designer
			outlets outside Florence, where you can treat yourself to the best value designer shopping in Europe. <a href="https://www.themall.it/en/outlet-italy/homepage.html"><strong>It’s
			where she bought her wedding dress</strong></a>.
			</p>
		</Col>
		<Col xs={12} sm={12} md={3} />
		</Row>
		</Grid>
			<WhereTo locations={this.state.locations}/>

		</div>
	);
	}
}

export default Recommendations;
