export const fetchAllPokemons = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const { results } = await res.json();
  const pokemons = results.map((result, index) => {
    const pokeIndex = ("000" + (index + 1)).slice(-4);
    const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`;
    return {
      pokeIndex,
      ...result,
      pokeImage,
    };
  });
  return pokemons;
};
