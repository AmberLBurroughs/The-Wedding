import React, { Component } from 'react';
import './style.css';

import { Grid, Row, Col} from 'react-bootstrap';

import Schedule from "../Schedule";

class Attire extends Component {
    state={
        attire: [
            {
                title:"Summer Soiree",
                attireClass: "summer",
                description:"Kicking off the festivities at the pool. Featuring Lambrusco tasting and bites from the region. Dress as if you are strolling on the Italian Riviera and prepared to take a dip at any moment. Swimming and SPF encouraged.",
                link:"https://pin.it/shlhddcf6gyrsf"
            },
            {
                title:"Welcome Dinner",
                 attireClass: "dinner",
                description:"One big family meal and dress to impress (jacket optional for signore).",
                link:"https://pin.it/2q7pxbjxg5mpzy"
            },
            {
                title:"The Wedding",
                 attireClass: "wedding",
                description:"Formal is the way. Tuxes or suits for Signore and floor-length gowns for Damas.",
                link:"https://pin.it/75dk5nouapvhk5"
            }
        ]
    }
	render() {
    	return (
    		<div className="attire" id="attire">
        		<Grid>
        			<Row>
        				<Col xs={12} sm={12} md={12}>
                            <h4>WHAT TO WEAR</h4>
                        </Col>
        			</Row>
        			<Row>
                        <Col xs={12} sm={12} md={3}/>
        				<Col xs={12} sm={12} md={6}>
        					<p>Dress code for the wedding is formal (tuxes or suits for Signore, floor-length gowns for Damas). We’ll be
    						partying on the grounds of a 10th-century castle. Plan for shoes that can conquer uneven cobblestones,
    						grass, gravel and a grappa-fueled dance-off.</p>
    					</Col>
                        <Col xs={12} sm={12} md={3}/>
        			</Row>
        		</Grid>
                <Schedule dressCode={this.state.attire} />
    		</div>
    	)
	}
}
export default Attire;
