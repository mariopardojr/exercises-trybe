import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemon;
    return(
      <section className="pokemon-card">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={name}/>
      </section>
    );
  }
}

export default Pokemon;