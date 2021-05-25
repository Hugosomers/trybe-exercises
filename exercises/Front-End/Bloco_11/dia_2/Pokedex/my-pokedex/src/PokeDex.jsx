import React from 'react';

class Pokedex extends React.Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemons;
    return (
        <div className='card'>
          <img src={image} alt={name}></img>
          <h3>{name}</h3>
          <p>Type: {type}</p>
          <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
    )
  }
}

export default Pokedex;
