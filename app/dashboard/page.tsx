"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Importa Firestore
import { auth, db } from "@/src/database/firebaseConfiguration"; // Asegúrate de importar db
import ProtectedRoute from "@/src/components/protectedRoute";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [nombre, setNombre] = useState<string | null>(null); // Estado para el nombre

  useEffect(() => {
    // Verifica si el usuario está autenticado
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user); // Guarda la información del usuario

        // Obtén los datos adicionales del usuario desde Firestore
        const userDocRef = doc(db, "users", user.uid); // Referencia al documento del usuario
        const userDoc = await getDoc(userDocRef); // Obtén el documento

        if (userDoc.exists()) {
          setNombre(userDoc.data().nombre); // Guarda el nombre en el estado
        } else {
          console.log("No se encontraron datos adicionales del usuario.");
        }
      } else {
        router.push("/login"); // Redirige al login si no hay usuario autenticado
      }
    });

    return () => unsubscribe(); // Limpia el listener al desmontar el componente
  }, [router]);

  // Función para cerrar sesión
  const handleLogout = async () => {
    try {
      await signOut(auth); // Cierra la sesión del usuario
      router.push("/"); // Redirige al usuario a la página de inicio de sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Bienvenido, {nombre}</h1>
          <p className="mb-4">
            Aquí puedes ver tus conexiones y actividades recientes.
          </p>
          {/* Botón para cerrar sesión */}
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
