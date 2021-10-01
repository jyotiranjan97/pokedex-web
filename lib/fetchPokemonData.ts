export const fetchPokemonDataById = async (id: string) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const { result } = await res.json();
  const pokemonData = {
    name: result.name,
    type: result.types.map((slot) => slot.type.name),
    stats: result.stats.map((data) => data),
  };
  return pokemonData;
};
