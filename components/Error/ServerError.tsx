import { useRouter } from "next/dist/client/router";

export default function InternetError() {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col text-white text-3xl mt-20">
        <span className="mb-5">Something went wrong.</span>
        <span>Try again after sometime.</span>
      </div>
      <button
        className="box-border bg-red-500 hover:bg-red-700 
            text-white px-5 py-2 rounded-md mt-8 text-xl font-semibold"
        onClick={() => router.replace(router.asPath)}
      >
        Retry
      </button>
    </div>
  );
}
