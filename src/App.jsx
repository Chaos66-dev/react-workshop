import { useState, useEffect } from 'react';
import Home from './Home.jsx';
import Details from './Details.jsx'
import './App.css';
import PokeContext from './context/PokeContext.jsx'
//import loader from './images/loading.gif'

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1024'
  const [pokeList, setpokeList] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setpokeList(data.results);
        setLoading(false);
      })
  }, [])



  return (
    <>
    <PokeContext.Provider value={setSelectedPokemon} >
      <h1 id="header">Pokedex</h1>
      {selectedPokemon ? (
        <div className="detailspage">
          <Details pokeData={selectedPokemon}></Details>
        </div>
      ) : (
        <div className="homepage">
          {loading ? (
            <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDA5Yzc3dm42ZjkxdXU1N2YzemVjcHg5ZWp4cjdhbmpxeW4ybzU4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KG4PMQ0jyimywxNt8i/giphy.gif' alt='loading image' className="loading-icon"/>
          ):(
            <Home pokeList={pokeList}> </Home>
          )}
        </div>
      )
      }
    </PokeContext.Provider>
    </>
  )
}

export default App
