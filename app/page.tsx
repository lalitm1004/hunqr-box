"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CloudSnow, QrCode } from "lucide-react";
import { useQRCode } from "next-qrcode";
import React, { ChangeEvent, useEffect, useState } from "react";

export default function Home() {

  const { Canvas } = useQRCode(); 
  const [input, setInput] = useState<string>("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const latest = value[value.length - 1];
    console.log(latest);
    if (value.length > 4) {
      event.target.value = value.slice(0, 4);
    } else if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", undefined].indexOf(latest) === -1) {
      event.target.value = value.slice(0, value.length - 1);
    } else if (value.length === 0) {
      setInput("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    } else {
      setInput(value);
    }
  }

  return (
    <main>
      <div className={`h-screen w-screen bg-hungerbox-violet flex justify-center items-center`}>
        <div className={`h-[60%] w-[80%] md:w-[50%] lg:w-[20%] bg-white rounded-xl shadow-lg shadow-black flex flex-col justify-between`}>
          <div className={`text-3xl w-full flex justify-center items-center gap-2 my-5`}>
            <QrCode color={`#3A1593`}/>
            <h1>HunQRBox</h1>
          </div>
          <div className={`flex flex-grow flex-col justify-start mt-5`}>
            <div className={`flex justify-center items-center gap-2`}>
              <Input
                type="text"
                inputMode="numeric"
                pattern="\d{4}"
                placeholder={`Enter Code`}         
                className={`bg-hungerbox-light-violet w-[60%] text-center`}
                onChange={handleChange}
              />
            </div>
            <div className={`flex justify-center items-center mt-6`}>
              {input && 
                <Canvas 
                  text={input as string}
                  options={{
                    width: 200,
                    color: {
                      dark: "#000000",
                      light: "#ffffff",
                    }
                  }}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
