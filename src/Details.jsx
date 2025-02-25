import PokeContext from './context/PokeContext.jsx'
import { useContext, useEffect, useState } from 'react'


function capitalizeFirstChar(str) {
    if (!str) return str; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// eslint-disable-next-line react/prop-types
export default function Details({pokeData}) {
    const {details} = {details: pokeData, setDetails: () => {}};
    const moves = details.moves;
    const setPokemon = useContext(PokeContext)
    const [flavorText, setFlavorText] = useState('')

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon-species/' + details.id)
                    .then(res => res.json())
                    .then(data => setFlavorText(data.flavor_text_entries[0].flavor_text))
    }, [])

    return (<>
    <PokeContext>
      <button id="goBack-button" onClick={() => setPokemon(null)}>Go Back to List</button>
      <div className={`container`}>
        <div className="info">
            <div className="name-img">
                <h2 id={capitalizeFirstChar(details.forms[0].name)}>{capitalizeFirstChar(details.forms[0].name)}</h2>
                <img className="detailsImg" src={details.sprites.other.home.front_default} />
            </div>

            <div className="bio">
                <h3>Bio</h3>
                <p>{flavorText}</p>
                <p>Types: {details.types.map((type, i) => capitalizeFirstChar(type.type.name) + " ")}</p>
                <p>Height: {details.height*10} centimeters Weight: {details.weight/10} kg</p>
                <p>Base Stats: {details.stats[0].stat.name}: {details.stats[0].base_stat} {" "}
                     {details.stats[1].stat.name}: {details.stats[1].base_stat} {" "}
                     {details.stats[2].stat.name}: {details.stats[2].base_stat} {" "}
                     {details.stats[3].stat.name}: {details.stats[3].base_stat} {" "}
                     {details.stats[4].stat.name}: {details.stats[4].base_stat} {" "}
                     {details.stats[5].stat.name}: {details.stats[5].base_stat} {" "}
                </p>
            </div>
        </div>
        <h3>Moves</h3>
        <div id='move-wrapper'>
          <ul className="moves">
            {moves.map((move, i) => <li key={i} className="move-item">{move.move.name}</li>)}
          </ul>
        </div>
      </div>
    </PokeContext>
    </>)
  }