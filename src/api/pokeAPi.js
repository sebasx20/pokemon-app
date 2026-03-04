// fetch the pokemons from the list
async function fetchData() {
  try {
    // Get a list of pokemons
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0",
    );

    // Show an error if couldn't fetch the data
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    // turn the response into a json
    const data = await response.json();

    // fetch the url of the pokemons from the list
    const urls = data.results.map((pokemon) => pokemon.url);

    return urls;
  } catch (error) {
    console.log(error);
  }
}

// Pass the sprites url
export async function spritePrinter() {
  try {
    // an async func return a promise

    const data = await fetchData();

    // iterate the data list of url to get each pokemon data
    const spriteUrls = data.map(async (url) => {
      const res = await fetch(url); // fetch the pokemon url
      const json = await res.json(); // convert to json
      return json;
    });

    // const pokemonImageArray = await spriteUrls.json();

    // Wait until all the promise are fullfilled
    const pokemonData = await Promise.all(spriteUrls);

    let urls = [];

    pokemonData.map((data) => {
      urls.push(data.sprites.front_default);
    });

    return urls;
  } catch (error) {
    console.log(error);
  }
}

// Pokemon Search
export async function searchPokemon(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
      throw new Error("Pokemon not found");
    }

    const data = await response.json();

    return data.sprites.front_default;
  } catch (error) {
    console.log(error);
  }
}
