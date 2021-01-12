import React from 'react';
import Pokemon from './Pokemon';

class PokemonList extends React.Component {
  render() {
    const { pokemons } = this.props;
    return(
      <div>
        {pokemons.map((pokemon) => <Pokemon pokemon={pokemon} />)}
      </div>
    );
  }
}

export default PokemonList;