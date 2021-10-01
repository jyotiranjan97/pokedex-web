import { GetStaticProps } from "next";
import Head from "next/head";
import Results from "../components/Results/Results";
import SearchBox from "../components/SearchBox/SearchBox";
import { fetchAllPokemons } from "../lib/fetchAllPokemons";

export default function Home({ pokemons }) {
  return (
    <div className="flex flex-col items-center dark:bg-black justify-center min-h-screen py-2">
      <Head>
        <title>Pok&#233;dex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h2 className="text-4xl font-bold tracking-wider text-gray-900 dark:text-white">
          Pok&#233;dex
        </h2>
        <SearchBox />
        <Results pokemons={pokemons} />
      </main>

      <footer className="flex items-center justify-center w-full h-20 border-t">
        <p className="text-sm tracking-wider font-semibold text-gray-700 dark:text-white">
          All rights reserved by{" "}
          <a href="https://pokeapi.co/" target="_blank">
            @pok&#233;api.co
          </a>
        </p>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pokemons = await fetchAllPokemons();
  return {
    props: {
      pokemons,
    },
  };
};
