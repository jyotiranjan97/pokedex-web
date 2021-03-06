import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { leftPaddingZeros } from "../../../utility/helperFunctions";

interface Props {
  data: Record<string, string>;
}

export default function PokeCard({ data }: Props) {
  const router = useRouter();

  return (
    <div
      className="w-48 border-4 border-purple-900 hover:border-0 h-60 p-4 bg-gray-900 
        hover:bg-opacity-60 m-8 rounded-lg overflow-hidden shadow-lg"
      onClick={() => router.push(`/pokemon/${data.name}`)}
    >
      <Image
        className="w-full text-white hover:rotate-12"
        height={100}
        width={100}
        src={data.image}
        alt="😟Can't Load the Image"
      />
      <div className="px-6 py-2 text-gray-300 font-semibold tracking-wide">
        {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
      </div>
      <div className="px-6 pt-4 pb-2">
        <span
          className="inline-block bg-green-700 rounded-full px-3 py-1 
                text-sm tracking-wide font-semibold text-white mr-2 mb-2"
        >
          #{leftPaddingZeros(data.id)}
        </span>
      </div>
    </div>
  );
}
