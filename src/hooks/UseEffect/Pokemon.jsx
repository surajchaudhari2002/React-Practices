import { useEffect, useState } from "react"
// import "./pokemon.css"
export const Pokemon = () => {
    const [pokemon, setPokemon] = useState(null)

    const fetchapi = () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => { setPokemon(data) })
            .catch((error) => console.log(error))
    }

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"
    useEffect(() => {
        fetchapi();
    }, [])

    console.log(pokemon)

    if (pokemon)
        return (
            <>

<section className="container">
      <header>
        <h1> Lets Catch Pokémon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{pokemon.name}</h1>
</li>
</ul>
          </section>
            </>
        )
}