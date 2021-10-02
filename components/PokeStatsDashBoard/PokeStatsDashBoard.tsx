import Image from "next/image";

export default function PokeStatsCard({ pokeData }) {
  const typeOfPokemon = pokeData.type.map((type, index) => (
    <div className="px-6 pt-4 pb-2" key={index}>
      <span
        className="inline-block bg-green-700 rounded-full px-3 py-1 
                text-sm tracking-wide font-semibold text-white mr-2 mb-2"
      >
        {type}
      </span>
    </div>
  ));
  console.log(pokeData);

  return (
    <div className="md:flex rounded-xl p-8 md:bg-gray-900 overflow-hidden md:max-w-screen-lg md:h-96 md:w-screen">
      {/**Image Container */}
      <div className="md:w-2/6 m-2">
        <Image src={pokeData.image} height={250} width={250} />
      </div>
      {/**Stats Container */}
      <div className="md:w-4/6 m-2">
        {/** Pokemon Name */}
        <h5 className="text-white text-3xl font-mono">
          {pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)}
        </h5>
        <div className="flex flex-row justify-evenly md:my-10 flex-wrap">
          {/** Attributes */}
          <div className="flex flex-col self-center justify-evenly my-2 max-w-xl">
            {/** Height */}
            <div className="flex justify-between w-40 my-1">
              <span className="font-semibold">Height</span>
              <span className="font-semibold">{pokeData.height}</span>
            </div>
            {/** Weight */}
            <div className="flex justify-between md:w-40 my-1">
              <span className="font-semibold">Weight</span>
              <span className="font-semibold">{pokeData.weight}</span>
            </div>
            <div className="hidden md:block my-1">&nbsp;</div>
            <div className="hidden md:block my-1">&nbsp;</div>
          </div>
          {/**Pokemon Stats */}
          <div className="flex flex-col self-center justify-evenly my-2 max-w-xl">
            {/** HP */}
            <div className="flex justify-between w-40 my-1">
              <span className="font-semibold">HP</span>
              <span className="text-green-400 font-semibold">
                {pokeData.stats[0]}
              </span>
            </div>
            {/** Attack */}
            <div className="flex justify-between md:w-40 my-1">
              <span className="font-semibold">Attack</span>
              <span className="text-red-400 font-semibold">
                {pokeData.stats[1]}
              </span>
            </div>
            {/** Defense */}
            <div className="flex justify-between md:w-40 my-1">
              <span className="font-semibold">Defense</span>
              <span className="text-yellow-400 font-semibold">
                {pokeData.stats[2]}
              </span>
            </div>
            {/** Speed */}
            <div className="flex justify-between md:w-40 my-1">
              <span className="font-semibold">Speed</span>
              <span className="text-blue-400 font-semibold">
                {pokeData.stats[5]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
