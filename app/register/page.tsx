"use client";
import QrCaptureForm from "@/src/components/qrcapture/qrCapture";
import { useState } from "react";

export default function RegisterPage() {
  const [studentInfo, setStudentInfo] = useState<any>(null);
  const [message, setMessage] = useState<string | null>(null);
  // Función que se ejecuta cuando el usuario envía el formulario
  const handleSubmit = async (qrData: string | null) => {
    if (qrData) {
      try {
        // Hacer la solicitud al endpoint proxy
        const response = await fetch(
          `/api/proxy?url=${encodeURIComponent(qrData)}`
        );
        const htmlText = await response.text();

        // Parsear el HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");

        // Función para extraer el valor de una celda basado en el texto de la celda anterior
        const getValueByLabel = (label: string) => {
          const cells = Array.from(doc.querySelectorAll("td"));
          const labelCell = cells.find(
            (cell) => cell.textContent?.trim() === label
          );
          return labelCell?.nextElementSibling?.textContent?.trim();
        };

        // Extraer la información del estudiante
        const name = getValueByLabel("Nombre:");
        const sede = getValueByLabel("Sede:");
        const situacion = getValueByLabel("Situación:");
        const vigencia = getValueByLabel("Vigencia:");

        // Verificar si algún campo está vacío
        if (!name || !sede || !situacion || !vigencia) {
          setMessage("No se pudo extraer la información del estudiante.");
          setStudentInfo(null); // Limpiar la información del estudiante
          return; // Detener la ejecución
        }

        // Verificar si la sede es CUCEI
        if (
          sede !==
          "CUCEI - CENTRO UNIVERSITARIO DE CIENCIAS EXACTAS E INGENIERIAS"
        ) {
          setMessage("Lo sentimos, pero no eres estudiante del CUCEI.");
          setStudentInfo(null); // Limpiar la información del estudiante
          return; // Detener la ejecución
        } else if (situacion !== "VIGENTE") {
          setMessage("Lo sentimos, pero tu situación no es vigente.");
          setStudentInfo(null); // Limpiar la información del estudiante
          return; // Detener la ejecución
        }

        // Si todo está bien, guardar la información del estudiante
        setStudentInfo({ name, sede, situacion, vigencia });
        setMessage(null); // Limpiar el mensaje de error
      } catch (error) {
        setMessage(
          "Error al obtener la información del estudiante. Intenta de nuevo."
        );
        setStudentInfo(null); // Limpiar la información del estudiante
      }
    } else {
      setMessage("No se detectó ningún QR.");
      setStudentInfo(null); // Limpiar la información del estudiante
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Registro</h1>

        <QrCaptureForm onSubmit={handleSubmit} />

        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("Lo sentimos") || message.includes("Error")
                ? "text-red-600"
                : "text-gray-600"
            } font-semibold`}
          >
            {message}
          </p>
        )}

        {studentInfo && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">
              Información del Estudiante
            </h2>
            <p>
              <strong>¡Hola {studentInfo.name}!</strong>
            </p>
            <p>
              <strong>Sede:</strong> {studentInfo.sede}
            </p>
            <p>
              <strong>Situación:</strong> {studentInfo.situacion}
            </p>
            <p>
              <strong>Vigencia:</strong> {studentInfo.vigencia}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
