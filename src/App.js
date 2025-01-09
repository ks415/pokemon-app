import { useEffect } from 'react';
import './App.css';
import { getAllpokemon } from './utils/pokemon';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンデータを取得
      let res = await getAllpokemon(initialURL);
      console.log(res);
    };
    fetchPokemonData();
  }, []);
  return (
    <div className="App">
    </div>
  );
}

export default App;
