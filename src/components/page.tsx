"use client";
import Logo from "@/src/components/logo";
import TerminosBoton from "@/src/components/terminosBoton";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center pl-10 pr-14 py-4">
        <Logo />
        <div className="space-x-4 ">
          <button className="px-4 py-2 bg-transparent rounded-lg hover:bg-slate-50 transition">
            Iniciar Sesión
          </button>
          <button className="px-4 py-2 bg-blue-950 rounded-lg hover:bg-blue-900 transition font-bold text-white shadow-xl">
            Registrarse
          </button>
        </div>
      </header>

      <main className="px-20 py-16 grid grid-cols-2">
        <h1 className="text-6xl font-bold text-blue-950 font-serif leading-[5rem]">
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
        <div className="col-start-1 row-start-2">
          <p className="mt-10 text-lg max-w-[31rem] text-justify leading-[2rem]">
            Encuentra a alguien que entienda tus desvelos, tus parciales y tu
            amor por el estudio. Aquí no hay exámenes ni listas de espera, solo
            conexiones genuinas.
          </p>
          <div className="place-self-center mr-40">
            <button className="col-start-1 row-start-3 mt-10 px-4 py-2 bg-customPink rounded-lg hover:bg-pink-300 transition font-bold text-white shadow-xl">
              ¡Empieza a buscar!
            </button>
          </div>
          <p className="text-gray-600 hover:text-gray-950 mt-5 text-center mr-40 underline">
            <TerminosBoton />
          </p>
        </div>
      </main>
    </div>
  );
}
