import Image from "next/image";
import search from "../../public/Search.svg";

export default function SearchBox() {
  return (
    <div className="p-8">
      <div className="bg-white flex h-16 items-center rounded-3xl shadow-xl">
        <input
          className="rounded-l-full w-auto py-4 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
        />

        <div className="p-4">
          <button className="bg-red-500 text-white rounded-full p-2 hover:bg-red-300 focus:outline-none w-12 h-12 flex items-center justify-center">
            <Image src={search} />
          </button>
        </div>
      </div>
    </div>
  );
}
