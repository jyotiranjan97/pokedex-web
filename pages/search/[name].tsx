import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { ParsedUrlQuery } from "querystring";
import NotFoundError from "../../components/Error/NotFoundError";
import PokeCard from "../../components/Results/Card/PokeCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchPokemonDataByName } from "../../lib/fetchPokemonData";
import back from "../../public/Back.svg";

export default function SearchResultPage({ pokemonData, error }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center bg-black justify-center min-h-screen py-2">
      <Head>
        <title>Search</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Pokemon searched by Name" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <h2
          className="text-4xl font-bold tracking-wider text-white mb-5"
          onClick={() => router.push("/")}
        >
          Pok&#233;dex
        </h2>

        <SearchBox />

        {error ? <NotFoundError /> : <PokeCard data={pokemonData} />}

        <div className="flex flex-col h-auto w-auto justify-center">
          <button
            className="bg-red-600 hover:bg-red-800 h-14 w-14 rounded-full md:mr-4"
            onClick={() => router.push("/")}
          >
            <Image src={back} alt="Back" height={30} width={30} />
          </button>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-16 border-t">
        <p className="text-sm tracking-wider font-semibold text-gray-700">
          All rights reserved by{" "}
          <a
            href="https://pokeapi.co/"
            className="text-red-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            @pok&#233;api.co
          </a>
        </p>
      </footer>
    </div>
  );
}

interface IParams extends ParsedUrlQuery {
  name: string;
}

export const getServerSideProps = async (context) => {
  const { name } = context.params as IParams;
  let { pokemonData, error } = await fetchPokemonDataByName(name);
  return {
    props: {
      pokemonData,
      error,
    },
  };
};
