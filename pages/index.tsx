import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import InternetError from "../components/Error/ServerError";
import Results from "../components/Results/Results";
import ScrollToTop from "../components/Scroll/ScrollToTop";
import SearchBox from "../components/SearchBox/SearchBox";
import { fetchAllPokemons, fetchMorePokemons } from "../lib/fetchAllPokemons";

export default function Home({ pokemons, error }) {
  const [allPokemons, setAllPokemons] = useState(pokemons);
  const [offset, setOffset] = useState(1);

  const loadMorePokemons = async () => {
    const newOffset = offset + 20;
    console.log(newOffset);
    const newPokemons = await fetchMorePokemons(newOffset);
    setOffset(newOffset);
    setAllPokemons((pokemons) => [...pokemons, ...newPokemons]);
  };

  return (
    <div className="flex flex-col items-center bg-black justify-center min-h-screen py-2">
      <Head>
        <title>Pok&#233;dex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h2 className="text-4xl font-bold tracking-wider text-white mb-5">
          Pok&#233;dex
        </h2>
        {console.log(error)}
        {error ? (
          <InternetError />
        ) : (
          <>
            <SearchBox />
            {/** Results */}
            <Results pokemons={allPokemons} />
            {/** Load More Button */}
            <button
              type="button"
              onClick={() => loadMorePokemons()}
              className="text-white px-4 py-2 my-3 text-md rounded-md bg-red-500 hover:bg-red-800
            font-semibold tracking-wide"
            >
              Load More
            </button>
            {/** Scroll to top button */}
            <ScrollToTop />
          </>
        )}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { pokemons, error } = await fetchAllPokemons();
  console.log(error);
  return {
    props: {
      pokemons,
      error,
    },
  };
};
