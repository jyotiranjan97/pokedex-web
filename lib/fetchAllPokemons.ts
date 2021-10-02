const URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchAllPokemons = async () => {
  const res = await fetch(URL + "?limit=20");
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

export const fetchMorePokemons = async (offset: number) => {
  const res = await fetch(URL + `?limit=20&offset=${offset}`);
  const { results } = await res.json();
  const pokemons = results.map((result, index) => {
    const pokeIndex = ("000" + (index + 1 + offset)).slice(-4);
    const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1 + offset
    }.svg`;
    return {
      pokeIndex,
      ...result,
      pokeImage,
    };
  });
  return pokemons;
};
