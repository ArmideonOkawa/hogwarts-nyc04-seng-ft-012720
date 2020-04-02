import React, { Component } from 'react';


class PigCard extends Component {
  constructor(){
    super()
    this.state = {
      displayDetails: false
    }
  }

  handleClick = (event) => {
    console.log('clicked the pig');
    this.setState({
      displayDetails: !this.state.displayDetails
    })
  }

  render (){
    return (
    <div onClick={this.handleClick}>
      <h3>{this.props.name}</h3>
      <img src={require(`../hog-imgs/${this.props.name.toLowerCase().split(' ').join('_')}.jpg`)} />
    {this.state.displayDetails ? <div>
      <p>Specialty: {this.props.specialty}</p><
        p>Greased: {this.props.greased.toString()}</p>
        <p>Weight Ratio: {this.props.weight}</p><p>Medal Winner: {this.props.medal}</p> 
        </div> : <fragment></fragment>}
   
   </div>
   )
  }


} //class



  export default PigCard;