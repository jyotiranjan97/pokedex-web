import { useRouter } from "next/dist/client/router";
import React from "react";

export default function Custom404ErrorPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center bg-black justify-center min-h-screen py-2">
      <h3 className="text-3xl text-white">Page not Found! 😥</h3>
      <button
        className="box-border bg-red-500 hover:bg-red-700 
            text-white px-5 py-2 rounded-md mt-8 text-xl font-semibold"
        onClick={() => router.push("/")}
      >
        Go Back
      </button>
    </div>
  );
}
