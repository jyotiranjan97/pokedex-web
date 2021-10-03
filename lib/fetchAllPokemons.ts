const URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchAllPokemons = async () => {
  let pokemons = [];
  let error = "";
  try {
    const res = await fetch(URL + "?limit=20");
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
  } catch (e) {
    console.log("Error fetching Pokemons", e);
    error = e.toString();
  }
  return { pokemons, error };
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
      id: pokeIndex,
      ...result,
      image: pokeImage,
    };
  });
  return pokemons;
};
