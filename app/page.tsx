"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QrCode } from "lucide-react";
import { useQRCode } from "next-qrcode";
import React, { ChangeEvent, useEffect, useState } from "react";

export default function Home() {

  const [input, setInput] = useState<string | null>(null);
  const [validInput, setValidInput] = useState<boolean>(false);

  const { Canvas } = useQRCode(); 

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue)) {
      setInput(inputValue);
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !(
        (event.key >= '0' && event.key <= '9') ||
        event.key === "Backspace" ||
        event.key === "Delete" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight" ||
        event.key === "Tab"
      )
    ) {
      event.preventDefault();
    }
  }

  useEffect(() => {
    setValidInput(input?.length === 4);
  }, [input])

  return (
    <main>
      <div className={`h-screen w-screen bg-hungerbox-violet flex justify-center items-center`}>
        <div className={`h-[60%] w-[80%] md:w-[50%] lg:w-[20%] bg-white rounded-xl shadow-lg shadow-black flex flex-col justify-between`}>
          <div className={`text-3xl w-full flex justify-center items-center gap-2 my-5`}>
            <QrCode
              color={`#3A1593`}
            />
            <p>HunQRBox</p>
          </div>
          <div className={`flex flex-grow flex-col justify-start mt-5`}>
            <div
              className={`flex justify-center items-center gap-2`}
            >
              <Input
                type="text"
                maxLength={4}
                placeholder={`Enter Code`}         
                className={`bg-hungerbox-light-violet w-[60%]`}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div
              className={`flex justify-center items-center mt-4`}
            >
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
