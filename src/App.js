import React, { Component } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

class App extends Component {

  state = {
    pokemons: []
  }

  componentDidMount() {
    fetch(`https://pokemon-tm-movelist-backend.herokuapp.com/pokemons`)
      .then(response => response.json())
      .then(parsedResponse => {
        this.setState({
          pokemons: parsedResponse.pokemons
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <PokemonList pokemons={this.state.pokemons}/>
      </div>
    );
  }
}

export default App;
