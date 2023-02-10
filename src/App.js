import "./App.css";
import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "./utils/pokemon.js";
import Card from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((res) => {
        let pokemonRecord = getPokemon(res.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  useEffect(() => {
    const fetchPokemonData = async (url) => {
      let res = await getAllPokemon(url);
      loadPokemon(res.results);
      console.log(res);
      setLoading(false);
    };

    fetchPokemonData(initialURL);
  }, []);

  console.log(pokemonData);
  return (
    <>
    <Navbar />
    <div className="App">
      {loading ? (
        <h1>ロード中...</h1>
      ) : (
        <>
          <div className="pokemonCardContainer">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon}/>;
            })}
          </div>
        </>
      )}
    </div>
    </>
  );
}

export default App;
