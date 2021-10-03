import Image from "next/image";
import Health from "../../public/Health.svg";
import Attack from "../../public/Attack.svg";
import Defense from "../../public/Defense.svg";
import Speed from "../../public/Speed.svg";
import Height from "../../public/Height.svg";
import Weight from "../../public/Weight.svg";

export const COLORS = {
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  electric: "#fcf7de",
  fairy: "#fceaff",
  fighting: "#e6e0da",
  fire: "#fddfdf",
  flying: "#f5f5f5",
  ground: "#f4e7da",
  grass: "#defde0",
  normal: "white",
  poison: "#98d7a5",
  psychic: "#eaeda1",
  rock: "#d5d5d4",
  water: "#def3fd",
};

export default function PokeStatsCard({ pokeData }) {
  const typeOfPokemon = pokeData.type.map((type, index) => (
    <div className="px-6 pt-2 pb-1" key={index}>
      <span
        className={`inline-block rounded-full px-3 py-1 
                text-sm tracking-wide font-semibold text-black`}
        style={{ backgroundColor: `${COLORS[type]}` }}
      >
        {type}
      </span>
    </div>
  ));

  return (
    <div
      className="md:flex rounded-xl p-8 md:bg-gray-800 bg-opacity-20 
      overflow-hidden md:max-w-screen-lg md:h-96 md:w-screen"
    >
      {/**Image Container */}
      <div
        className="flex justify-center 
          md:w-2/6 m-2 bg-gradient-to-r from-white via-blue-300 to-red-300 rounded-full"
      >
        <Image src={pokeData.image} height={250} width={250} />
      </div>
      {/**Stats Container */}
      <div className="md:w-4/6 m-2">
        {/** Pokemon Name */}
        <h5
          className={`text-3xl font-mono`}
          style={{ color: `${COLORS[pokeData.type[0]]}` }}
        >
          {pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)}
        </h5>
        {/**Falling Types */}
        <div className="flex flex-row md:my-3 justify-center">
          {typeOfPokemon}
        </div>
        <div className="flex flex-row justify-evenly flex-wrap">
          {/** Attributes */}
          <div className="flex flex-col self-center justify-evenly my-2 max-w-xl">
            {/** Height */}
            <div className="flex justify-between w-40 my-1">
              <span className="flex w-20">
                <span className="flex">
                  <Image src={Height} height={35} width={35} />
                </span>
                <span className="font-semibold text-lg text-white">Height</span>
              </span>
              <span className="font-semibold text-lg text-white">
                {pokeData.height}
              </span>
            </div>
            {/** Weight */}
            <div className="flex justify-between md:w-40 my-1">
              <span className="flex w-24">
                <span className="flex mx-0.5">
                  <Image src={Weight} height={20} width={20} />
                </span>
                <span className="font-semibold text-lg text-white">Weight</span>
              </span>
              <span className="font-semibold text-lg text-white">
                {pokeData.weight}
              </span>
            </div>
            <div className="hidden md:block my-1">&nbsp;</div>
            <div className="hidden md:block my-1">&nbsp;</div>
          </div>
          {/**Pokemon Stats */}
          <div className="flex flex-col self-center justify-evenly my-2 max-w-xl">
            {/** HP */}
            <div className="flex justify-between w-40 my-1">
              <span className="flex w-20">
                <span className="flex mx-1">
                  <Image src={Health} height={20} width={20} />
                </span>
                <span className="font-semibold text-lg text-white">HP</span>
              </span>
              <span className="text-green-400 font-semibold text-lg">
                {pokeData.stats[0]}
              </span>
            </div>
            {/** Attack */}
            <div className="flex justify-between w-40 my-1">
              <span className="flex w-20">
                <span className="flex mx-1">
                  <Image src={Attack} height={20} width={20} />
                </span>
                <span className="font-semibold text-lg text-white">Attack</span>
              </span>
              <span className="text-red-400 font-semibold text-lg">
                {pokeData.stats[1]}
              </span>
            </div>
            {/** Defense */}
            <div className="flex justify-between w-40 my-1 ">
              <span className="flex w-28">
                <span className="flex mx-1">
                  <Image src={Defense} height={20} width={20} />
                </span>
                <span className="font-semibold text-lg text-white">
                  Defense
                </span>
              </span>
              <span className="text-yellow-400 font-semibold text-lg">
                {pokeData.stats[2]}
              </span>
            </div>
            {/** Speed */}
            <div className="flex justify-between w-40 my-1">
              <span className="flex w-20">
                <span className="flex mx-1">
                  <Image src={Speed} height={20} width={20} />
                </span>
                <span className="font-semibold text-lg text-white">Speed</span>
              </span>
              <span className="text-blue-400 font-semibold text-lg">
                {pokeData.stats[5]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
