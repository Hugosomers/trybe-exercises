import './App.css';
import React from  'react';
import PokeData from './Data'
import Pokedex from './PokeDex';

class App extends React.Component {
  render() {

    return (
      <main>
        <h1>PokeDex</h1>
        <section className='cardsSection'>
          {PokeData.map(pokemon => <Pokedex pokemons={pokemon}/>)}
        </section>
      </main>
    );
  }
}

export default App;
