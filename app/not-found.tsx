// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Página no encontrada</p>
      <p className="text-gray-500 mt-2">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-customPink rounded-lg hover:bg-pink-300 transition font-bold text-white shadow-xl"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
