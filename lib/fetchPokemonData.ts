export const fetchPokemonDataByName = async (name: string) => {
  let pokemonData = {};
  let error = 0;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
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
    } else {
      error = res.status;
    }
  } catch (e) {
    console.log("Error fetching Pokemons", e);
  }
  return { pokemonData, error };
};
