import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import PokeCard from "../../components/Results/Card/PokeCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchPokemonDataByName } from "../../lib/fetchPokemonData";

export default function SearchResultPage({ pokemonData }) {
  return (
    <div className="flex flex-col items-center dark:bg-black justify-center min-h-screen py-2">
      <Head>
        <title>Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <SearchBox />
        <PokeCard data={pokemonData} />
      </main>
    </div>
  );
}

interface IParams extends ParsedUrlQuery {
  name: string;
}

export const getServerSideProps = async (context) => {
  const { name } = context.params as IParams;
  let pokemonData = await fetchPokemonDataByName(name);
  return {
    props: {
      pokemonData,
    },
  };
};
