import React from 'react'

export default function PokemonCard({ name, element, level }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Element: {element}</p>
            <p>Level: {level}</p>
        </div>
    )
}
