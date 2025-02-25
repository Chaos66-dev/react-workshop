import Pokemon from "./Pokemon";

// eslint-disable-next-line react/prop-types
function Home({pokeList}){

    return (<>
    <div className="pokeList" >
        {/* eslint-disable-next-line react/prop-types */}
      {pokeList.map(pokemon => <Pokemon key={pokemon.name} pokeData={pokemon}/>)}
    </div>
    </>)
}

export default Home