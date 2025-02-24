import { useEffect, useState} from "react";


function capitalizeFirstChar(str) {
    if (!str) return str; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// eslint-disable-next-line react/prop-types
function Pokemon({pokeData, onSelect}) {
    // define states
    const [pokeSprite, setpokeSprite] = useState('')
    const [pokeName, setPokeName] = useState('')
    const [details, setDetails] = useState('')

    // useEffect
    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        fetch(pokeData.url)
        .then(res => res.json())
        .then(data => {
          setDetails(data)
          setpokeSprite(data.sprites.other.home.front_default)
          setPokeName(data.name)
        })
      }, [])


    return (
        <>
        <div className='pokeWrapper' onClick={() => onSelect(details)}>
            <img  src={pokeSprite} className="pokePic" onClick={() => setDetails(details)}/>
            <h4 className="pokeName">{capitalizeFirstChar(pokeName)}</h4>
        </div>
        </>
    )
}

export default Pokemon