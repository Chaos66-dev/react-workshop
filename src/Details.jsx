
function capitalizeFirstChar(str) {
    if (!str) return str; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// eslint-disable-next-line react/prop-types
export default function Details({pokeData, goBack}) {
    const {details} = {details: pokeData, setDetails: () => {}};
    const moves = details.moves;

    return (<>
      <div className={`container ${details.types[0].type.name}`}>
        <div className="name-img">
          <h1 id={capitalizeFirstChar(details.forms[0].name)}>{capitalizeFirstChar(details.forms[0].name)}</h1>
          <img src={details.sprites.other.home.front_default} />
        </div>
        <div className="moves">
          <ul>
            {moves.filter((move, i) => i < 10).map((move, i) => <li key={i}>{move.move.name}</li>)}
          </ul>
        </div>
      </div>
      <button onClick={goBack}>Go Back</button>
    </>)
  }