// app/confirmacion/page.tsx
"use client";
import Link from "next/link";

export default function ConfirmacionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">¡Registro exitoso!</h1>
        <p className="mb-4">
          Por favor, verifica tu correo electrónico para activar tu cuenta.
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Volver al inicio de sesión
        </Link>
      </div>
    </div>
  );
}
