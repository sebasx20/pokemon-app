import "./App.css";
import { useState } from "react";
import { searchPokemon } from "./api/pokeAPi";
import Navbar from "./components/navbar";

function App() {
  const [search, setSearch] = useState([]);
  const [result, setResult] = useState([]);

  async function pokemon() {
    const temp = await searchPokemon(search);

    setResult(temp);
    console.log(temp);
  }

  return (
    <section className="app-container">
      <div className="content-body">
        <Navbar />
        <main className="main">
          <section>
            <input
              type="text"
              placeholder="Enter Pokemon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={pokemon}>Search Pokemon</button>
          </section>
        </main>
      </div>
      <div className="image-container">
        <img src={result} alt="Pokemon Sprite" className="pokemon-image" />
      </div>
    </section>
  );
}

export default App;
