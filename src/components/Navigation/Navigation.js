import React from 'react';
import { Navbar, NavItem, Nav} from 'react-bootstrap';
import "./style.css";


class Navigation extends React.Component {
	render(){
		return(
			<Navbar>
			  <Navbar.Header>
			    <Navbar.Brand>
			      <a href="#hero"><img src="./assets/img/Logo.png" alt="The Wedding."/></a>
			    </Navbar.Brand>
			    <Navbar.Toggle />
			  </Navbar.Header>
			  <Navbar.Collapse>
			  	<Nav>
				    <NavItem eventKey={1} href="#details">
				      details
				    </NavItem>
				    <NavItem eventKey={2} href="#schedule">
				      schedule of events
				    </NavItem>
				    <NavItem eventKey={2} href="#accomidations">
				      accommodations
				    </NavItem>
				    <NavItem eventKey={2} href="#attire">
				      what to wear
				    </NavItem>
				    <NavItem eventKey={2} href="#travel">
				      getting there
				    </NavItem>
				    <NavItem eventKey={2} href="#gifts">
				     gifts
				    </NavItem>
				</Nav>
			  </Navbar.Collapse>
			</Navbar>

		);
	}
}










export default Navigation;
