import Image from "next/image";

export default function PokeCard() {
  return (
    <div className="w-56 h-64 p-2 bg-gray-900 m-8 rounded-lg overflow-hidden shadow-lg">
      <Image
        className="w-full"
        height={100}
        width={100}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 text-green-500">Bulbasaur</div>
      <div className="px-6 pt-4 pb-2">
        <span
          className="inline-block bg-green-700 rounded-full px-3 py-1 
                text-sm tracking-wide font-semibold text-white mr-2 mb-2"
        >
          grass
        </span>
        <span
          className="inline-block bg-purple-800 rounded-full px-3 py-1 
                text-sm tracking-wide font-semibold text-white mr-2 mb-2"
        >
          poison
        </span>
      </div>
    </div>
  );
}
