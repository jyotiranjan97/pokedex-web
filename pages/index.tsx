import Head from "next/head";

export default function Home() {
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
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
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
