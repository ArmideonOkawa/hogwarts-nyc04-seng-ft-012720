import piggy from '../porco.png'
import React from 'react'


const Nav = (props) => {

	const handleRadio = (evt) => {
		props.greaseFilter(evt.target.value)
	}

	const handleDropdown = (evt) => {
		props.nameWeightFilter(evt.target.value)
	}

	return (
	  <div className="navWrapper">
		<span className="headerText">Hogwarts</span>
		<div className="TwirlyPig">
		  <img src={piggy} className="App-logo" alt="piggy" />
		</div>
		<span className="normalText">A React App for County Fair Hog Fans</span>
	<div>
		<div onChange={handleDropdown}>
		 <label>Filter By:</label>
		 <select>
		  <option value="no-filter"></option>
		  <option value="name">Name</option>
		  <option value="weight">Weight</option>
		 </select>
		</div>
		<div onChange={handleRadio}>
		 <input type="radio" name="greasy" value="all"/> 
		 <label>All Hogs</label>
		 
		 <input type="radio" name="greasy" value="greased"/>
		 <label>Greased Hogs</label>

		 <input type="radio" name="greasy" value="not-greasy"/>
		 <label>Ungreased Hogs</label>
		</div>

	</div>
	</div>
	  
	);
  };
  
  export default Nav;