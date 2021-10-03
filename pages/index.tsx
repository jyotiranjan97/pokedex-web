import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Results from "../components/Results/Results";
import SearchBox from "../components/SearchBox/SearchBox";
import { fetchAllPokemons, fetchMorePokemons } from "../lib/fetchAllPokemons";
import scroll from "../public/Scroll.svg";

export default function Home({ pokemons, error }) {
  const router = useRouter();

  const [allPokemons, setAllPokemons] = useState(pokemons);
  const [offset, setOffset] = useState(1);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

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
        <h2
          className="text-4xl font-bold tracking-wider text-white mb-5"
          onClick={() => router.push("/")}
        >
          Pok&#233;dex
        </h2>
        <SearchBox />
        {error ? (
          <div>Something went wrong, please try again after sometime</div>
        ) : (
          <>
            {/** Results */}
            <Results pokemons={allPokemons} />
            {/** Load More Button */}
            <button
              type="button"
              onClick={() => loadMorePokemons()}
              className="text-white px-3 py-1 my-3 rounded-md bg-red-500 
            font-semibold tracking-wide"
            >
              Load More
            </button>
            {/** Scroll to top button */}
            <div className="fixed bottom-3 right-5 cursor-pointer">
              {isButtonVisible && (
                <div onClick={scrollToTop}>
                  <Image src={scroll} height={50} width={50} />
                </div>
              )}
            </div>
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
