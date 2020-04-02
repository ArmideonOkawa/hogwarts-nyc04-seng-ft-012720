import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigIndex from './PigIndex';
// import Filter from './Filter';

const duplicateHogs = [...hogs]

class App extends Component {

  state = {
    allPigs: hogs
    //isGreased
    //isHidden
  }

  nameWeightFilter = (value) => {
    if (value === "name") {
      this.setState({
        allPigs: hogs.sort(function(a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
          return -1;
          }
          if (nameA > nameB) {
          return 1;
          }
          return 0;
        })
      })
    } else if (value === "weight") {
      this.setState({
        allPigs: hogs.sort(function (a, b) {
          var weightA = a.weight
          var weightB = b.weight
          return weightA - weightB;
          
        })
      })
    } else {
      this.setState({
        allPigs: duplicateHogs
      })
    }
  }

  greaseFilter = (value) => {

    if(value === "greased"){
      this.setState({
        allPigs: hogs.filter(pig => pig.greased === true)
      })
    }else if (value === "not-greasy"){
      this.setState({
        allPigs: hogs.filter(pig => pig.greased === false)
      })
    }else{
      this.setState({
        allPigs: duplicateHogs
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Nav nameWeightFilter={this.nameWeightFilter} greaseFilter={this.greaseFilter} />
        <PigIndex allPigs={this.state.allPigs}/>
      </div>
    
    );
  }
}

export default App;
