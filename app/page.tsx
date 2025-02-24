"use client";
import Logo from "@/src/components/logo";
import PrivacidadBoton from "@/src/components/privacidadBoton";
import TerminosBoton from "@/src/components/terminosBoton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col px-4 py-2">
      {/* Fondo rosa */}
      <div className="absolute top-0 left-1/2 h-full w-[50vw] bg-customPink opacity-30 z-[-1]"></div>

      <header className="flex justify-between items-center">
        <div className="ml-5 mt-3">
          <Logo />
        </div>
        <div className="md:space-x-4 mr-10">
          <button className="px-4 py-2 bg-transparent rounded-lg hover:bg-slate-50 transition">
            Iniciar Sesión
          </button>
          <button className="px-4 py-2 bg-blue-950 rounded-lg hover:bg-blue-900 transition font-bold text-white shadow-xl">
            Registrarse
          </button>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="pl-4 md:pl-14">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-950 font-serif leading-[3rem] md:leading-[5rem]">
            <p style={{ textShadow: "3px 3px 0px #EC939F" }}>
              <span
                style={{ textShadow: "3px 3px 0px #172554" }}
                className="text-customPink"
              >
                S
              </span>
              in pre-requisitos,
            </p>
            <p style={{ textShadow: "3px 3px 0px #EC939F" }}>
              <span
                style={{ textShadow: "3px 3px 0px #172554" }}
                className="text-customPink"
              >
                S
              </span>
              in trámites,
            </p>
            <p style={{ textShadow: "3px 3px 0px #EC939F" }}>
              <span
                style={{ textShadow: "3px 3px 0px #172554" }}
                className="text-customPink"
              >
                S
              </span>
              olo amor directo.
            </p>
          </h1>
          <p className="mt-4 text-lg text-justify leading-[2rem] md:pr-40">
            Encuentra a alguien que entienda tus desvelos, tus parciales y tu
            amor por el estudio. Aquí no hay exámenes ni listas de espera, solo
            conexiones genuinas.
          </p>
          <div className="flex justify-center w-full mt-6">
            <button className="mt-6 px-4 py-2 bg-customPink rounded-lg hover:bg-pink-300 transition font-bold text-white shadow-xl">
              ¡Empieza a buscar!
            </button>
          </div>
          <div className="mt-4 text-center md:text-center">
            <p className="text-gray-600 hover:text-gray-950 underline">
              <TerminosBoton />
            </p>
            <p className="text-gray-600 hover:text-gray-950 mt-2 underline">
              <PrivacidadBoton />
            </p>
          </div>
        </div>

        <div className="flex items-end justify-end">
          <Image
            src="/img/tolin_cesar.png"
            alt="tolin_cesar"
            width={500}
            height={500}
            objectFit="contain"
            layout="responsive"
            quality={100}
            className="self-end"
          />
        </div>
      </main>

      {/* Línea morada abajo*/}
      <div className="w-full h-2 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 shadow-lg"></div>
    </div>
  );
}
