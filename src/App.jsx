import { useState, useEffect } from 'react';
import Home from './Home.jsx';
import Details from './Details.jsx'
import './App.css';

function App() {
  const [curr, setCurr] = useState('https://pokeapi.co/api/v2/pokemon?limit=151')
  const [pokeList, setpokeList] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)


  useEffect(() => {
    fetch(curr)
      .then(res => res.json())
      .then(data => {
        setpokeList(data.results)
      })
  }, [curr])



  return (
    // main page components
      // title
      // 151 indiv pokemons presented with name and pic

    // indiv pokemon componenets
      // title
      // back button
      // name
      // img
      // description
      // moves


    <>
    {selectedPokemon ? (
      <div className="detailspage">
        <Details pokeData={selectedPokemon} goBack={() => setSelectedPokemon(null)}></Details>
      </div>
    ) : (
      <div className="homepage">
        <Home pokeList={pokeList} onSelect={setSelectedPokemon}> </Home>
      </div>
    )
    }
    </>

  )
}

export default App
