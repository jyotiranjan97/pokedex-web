import React from "react";
import PokeCard from "./Card/PokeCard";

interface Props {
  pokemons: Record<string, string>[];
}

export default function Results({ pokemons }) {
  const results = pokemons.map((pokemon) => (
    <PokeCard key={pokemon.pokeIndex} data={pokemon} />
  ));
  return (
    <div className="flex flex-wrap justify-center my-2 h-4/5 md:w-11/12">
      {results}
    </div>
  );
}
