export const fetchPokemonDataByName = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const result = await res.json();
  const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${result.id}.svg`;
  const pokemonData = {
    id: result.id,
    name: result.name,
    height: result.height,
    weight: result.weight,
    image: pokeImage,
    type: result.types.map((slot) => slot.type.name),
    stats: result.stats.map((data) => data.base_stat),
  };
  return pokemonData;
};
