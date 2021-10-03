import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { fetchPokemonDataByName } from "../../lib/fetchPokemonData";
import PokeStatsDashBoard from "../../components/PokeStatsDashBoard/PokeStatsDashBoard";
import back from "../../public/Back.svg";

export default function PokemonStatPage({ pokemonData, error }) {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-black min-h-screen py-2">
      <Head>
        <title>Stats - Pokemon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** Back Button */}
      <button
        className="flex flex-row justify-around text-white font-semibold text-xl 
          self-start mx-3 md:mx-12 md:my-6 my-1 px-4 py-2
          md:w-40 h-12 bg-red-600 rounded-lg hover:bg-red-900 
          active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none content-center"
        onClick={() => router.back()}
      >
        <span className="mr-2">
          <Image src={back} height={30} width={30} />
        </span>
        <span>go back</span>
      </button>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {error ? (
          <div>Something went wrong, please try again</div>
        ) : (
          <PokeStatsDashBoard pokeData={pokemonData} />
        )}
      </main>

      <footer className="flex items-center justify-center w-full h-16 border-t">
        <p className="text-sm tracking-wider font-semibold text-white">
          All rights reserved by{" "}
          <a
            href="https://pokeapi.co/"
            className="text-red-300"
            target="_blank"
          >
            @pok&#233;api.co
          </a>
        </p>
      </footer>
    </div>
  );
}

interface IParams extends ParsedUrlQuery {
  pokeName: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pokeName } = context.params as IParams;
  const { pokemonData, error } = await fetchPokemonDataByName(pokeName);
  return {
    props: {
      pokemonData,
      error,
    },
  };
};
