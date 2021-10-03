import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useState } from "react";
import search from "../../public/Search.svg";

export default function SearchBox() {
  const [pokeName, setPokeName] = useState("");
  const router = useRouter();

  const searchPokemon = () => {
    if (pokeName !== "") {
      router.push(`/search/${pokeName.toLowerCase()}`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        searchPokemon();
      }}
    >
      <div className="bg-white flex h-16 items-center rounded-3xl">
        <input
          className="rounded-l-full w-auto py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
          value={pokeName}
          onChange={(event) => setPokeName(event.target.value)}
        />

        <div className="p-4">
          <button
            className="bg-red-500 text-white rounded-full p-2 
            hover:bg-red-300 focus:outline-none w-12 h-12 flex items-center justify-center"
            onClick={() => searchPokemon()}
          >
            <Image src={search} />
          </button>
        </div>
      </div>
    </form>
  );
}
