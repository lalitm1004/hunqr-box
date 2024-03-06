"use client";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Custom404 () {
  
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [])
  
  return (
    <main>
      <div className={`h-screen w-screen bg-hungerbox-violet flex justify-center items-center`}>
        <div className={`h-[60%] w-[80%] md:w-[50%] lg:w-[20%] bg-white rounded-xl shadow-lg shadow-black flex flex-col justify-center items-center`}>
          <h1 className={`text-3xl`}>404</h1>
        </div>
      </div>
    </main>
  )
}