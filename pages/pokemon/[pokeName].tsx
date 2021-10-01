import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { fetchPokemonDataByName } from "../../lib/fetchPokemonData";
import back from "../../public/Back.svg";

export default function PokemonStatPage({ pokemonData }) {
  const router = useRouter();

  return (
    <div className="flex flex-col dark:bg-black min-h-screen py-2">
      <Head>
        <title>Stats - Pokemon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="text-white">Pokemon Stats shown Here</div>
      </main>
      <button
        className="text-white font-semibold text-xl self-center md:self-end md:mx-12 md:my-6 my-1 px-4 w-11/12 
          md:w-40 h-12 bg-red-600 rounded-lg hover:bg-red-900 
          active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none content-center"
        onClick={() => router.back()}
      >
        <span>Go Back</span>
      </button>
    </div>
  );
}

interface IParams extends ParsedUrlQuery {
  pokeName: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pokeName } = context.params as IParams;
  const pokemonData = await fetchPokemonDataByName(pokeName);
  return {
    props: {
      pokemonData,
    },
  };
};
