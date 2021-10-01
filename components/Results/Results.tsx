import React from "react";
import PokeCard from "./Card/PokeCard";

export default function Results() {
  return (
    <div className="flex flex-wrap justify-center my-2 h-4/5 md:w-11/12">
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
      <PokeCard />
    </div>
  );
}
