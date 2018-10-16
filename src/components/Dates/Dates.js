import React from "react";
import "./style.css";


const Dates = () =>{
	return(
		<div className="dates">

			<div className="dates-img" />

			<div className="date-info-wrap clearfix">
				<div className="dates-info">
					<img src="/assets/img/Wedding.png" alt="wedding veil" />
					<h1>September 4<sup>th</sup> &#8209; 6<sup>th</sup>&#44; 2018</h1>
					<hr/>
					<p>Il Castello di Tabiano</p>
					<p>Italian region of Emilia-Romagna&#44; Province of Parma</p>
					<p>Tabiano Castello&#44; 4&#44; 43039 Salsomaggiore Terme PR&#44; Italy</p>
					<p><a href="tel:+39-0524-881168">&#43;39 0524 881168</a></p>
					<hr/>
				</div>
			</div>

		</div>
	);
}

export default Dates;
