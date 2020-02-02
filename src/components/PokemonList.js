import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemons }) {

    console.log("PokemonList", ...pokemons)

    const showPokemons = pokemons.map(pokemon => {
        return <PokemonCard key={pokemon.id} {...pokemon}/>
    })

    return (
        <div>
            {showPokemons}
        </div>
    )
}
