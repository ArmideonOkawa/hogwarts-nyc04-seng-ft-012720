import React, { Component } from 'react';
import PigCard from './PigCard';

const PigIndex = (props) => {
  const getPigs = () => {
    return props.allPigs.map((pig, idx) => {
      return <PigCard 
      key={idx} 
      name={pig.name} 
      specialty={pig.specialty} 
      greased={pig.greased} 
      weight={pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} 
      medal={pig['highest medal achieved']}/>
    })
  }

return (
    <div>{getPigs()}</div>
    )

}


export default PigIndex;