import { useEffect, useState, useContext } from "react";
import PokeContext from './context/PokeContext.jsx'

const loading_gif_link = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDA5Yzc3dm42ZjkxdXU1N2YzemVjcHg5ZWp4cjdhbmpxeW4ybzU4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KG4PMQ0jyimywxNt8i/giphy.gif'

function capitalizeFirstChar(str) {
    if (!str) return str; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// eslint-disable-next-line react/prop-types
function Pokemon({pokeData}) {
    // define states
    const [pokeSprite, setpokeSprite] = useState(null)
    const [pokeName, setPokeName] = useState('')
    const [details, setDetails] = useState('')
    const setPokemon = useContext(PokeContext)
    const [loader, setLoader] = useState(true)

    // useEffect
    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        setLoader(true);
        fetch(pokeData.url)
        .then(res => res.json())
        .then(data => {
          setDetails(data)
          setpokeSprite(data.sprites.other.home.front_default)
          setPokeName(data.name)
          setLoader(false);
        })
      }, [])


    return (
        <>
        <PokeContext>
            {loader ? (
                <img src={loading_gif_link} alt='loading image' className="loading-icon pokePic"/>
            ) : (
                <div className='pokeWrapper' onClick={() => setPokemon(details)}>
                    <img  src={pokeSprite} className="pokePic" onClick={() => setDetails(details)}/>
                    <h4 className="pokeName">{capitalizeFirstChar(pokeName)}</h4>
                </div>
            )

        }
        </PokeContext>
        </>
    )
}

export default Pokemon