import cacheData from "memory-cache";

export const fetchPokemonDataByName = async (name: string) => {
  let pokemonData = {};
  let error = 0;
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  try {
    const value = cacheData.get(url);
    if (value) {
      return value;
    } else {
      const hours = 24;
      const res = await fetch(url);
      if (res.ok) {
        const result = await res.json();
        const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${result.id}.svg`;
        pokemonData = {
          id: result.id,
          name: result.name,
          height: result.height,
          weight: result.weight,
          image: pokeImage,
          type: result.types.map((slot) => slot.type.name),
          stats: result.stats.map((data) => data.base_stat),
        };
        // Storing data in cache for 24hrs
        cacheData.put(url, { pokemonData, error }, hours * 1000 * 60 * 60);
      } else {
        error = res.status;
      }
    }
  } catch (e) {
    console.log("Error fetching Pokemons", e);
  }
  return { pokemonData, error };
};
