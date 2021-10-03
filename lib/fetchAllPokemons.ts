import cacheData from "memory-cache";

const URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchAllPokemons = async () => {
  let pokemons = [];
  let error = 0;
  const url = URL + "?limit=20";
  try {
    const value = cacheData.get(url);
    if (value) {
      return value;
    } else {
      const hours = 24;
      const res = await fetch(url);
      if (res.ok) {
        const { results } = await res.json();
        pokemons = results.map((result, index) => {
          const pokeIndex = ("000" + (index + 1)).slice(-4);
          const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            index + 1
          }.svg`;
          return {
            id: pokeIndex,
            ...result,
            image: pokeImage,
          };
        });
        // Storing data in cache for 24hrs
        cacheData.put(url, { pokemons, error }, hours * 1000 * 60 * 60);
      } else {
        error = res.status;
      }
    }
  } catch (e) {
    console.log("Error fetching Pokemons", e);
  }
  return { pokemons, error };
};

export const fetchMorePokemons = async (offset: number) => {
  let newPokemons = [];
  let error = 0;
  const url = URL + `?limit=20&offset=${offset}`;
  try {
    const value = cacheData.get(url);
    if (value) {
      return value;
    } else {
      const hours = 24;
      const res = await fetch(url);
      if (res.ok) {
        const { results } = await res.json();
        newPokemons = results.map((result, index) => {
          const pokeIndex = ("000" + (index + 1 + offset)).slice(-4);
          const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            index + 1 + offset
          }.svg`;
          return {
            id: pokeIndex,
            ...result,
            image: pokeImage,
          };
        });
        // Storing data in cache for 24hrs
        cacheData.put(url, { newPokemons, error }, hours * 1000 * 60 * 60);
      } else {
        error = res.status;
      }
    }
  } catch (e) {
    console.log("Error while fetching more pokemons", e);
  }
  return { newPokemons, error };
};
