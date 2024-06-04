"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    const windowsResolutionRate = window.innerWidth / window.innerHeight;
    if (windowsResolutionRate < 1.77) {
      setWidth(window.innerHeight * (16 / 9));
      setHeight(window.innerHeight);
    } else {
      setWidth(window.innerWidth);
      setHeight(window.innerWidth / (16 / 9));
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, height]);

  return (
    <div>
      <div className="relative w-[100vw-18px] h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 m-0 -z-10 opacity-80 brightness-50 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `"${width}"`,
              height: `"${height}"`,
            }}
            width={width}
            height={height}
            src="https://www.youtube.com/embed/OLHK9fa8evM?autoplay=1&mute=1&controls=0&loop=1&playlist=OLHK9fa8evM&showinfo=0&modestbranding=1&mode=transparent&playsinline=0&autohide=0&iv_load_policy=3"
            title="Beer short loop"
            allow="accelerometer; autoplay; gyroscope;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={false}
          ></iframe>
          <div className="relative z-1 text-white text-center p-5">
            <h1 className="mt-40">Seu Texto Aqui</h1>
            <p>Adicione qualquer conteúdo que desejar sobre o vídeo.</p>
          </div>
        </div>
      </div>
      <p>animação</p>
      <p>mensagem</p>
    </div>
  );
}
