import React from 'react';

import { pokemons } from './data'
import PokemonList from './components/PokemonList'

import './App.css';

class App extends React.Component {
  render() {
    return(
      <main>
        <PokemonList className="list" pokemons={pokemons}/>
      </main>
    );
  }
}

export default App;
