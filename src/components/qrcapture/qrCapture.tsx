"use client";
import { useState } from "react";
import jsQR from "jsqr";

interface QrUploadFormProps {
  onSubmit: (qrData: string | null) => void;
}

export default function QrCaptureForm({ onSubmit }: QrUploadFormProps) {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [qrResult, setQrResult] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (image) {
      // Crear un objeto de imagen
      const img = new Image();
      img.src = preview || "";

      img.onload = () => {
        // Crear un canvas y obtener la imagen en píxeles
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

          // Pasar la imagen a jsQR para detectar el QR
          const qrCode = jsQR(
            imageData.data,
            imageData.width,
            imageData.height
          );
          if (qrCode) {
            setQrResult(qrCode.data);
            onSubmit(qrCode.data); // Envías el dato leído al padre
          } else {
            setQrResult("No se detectó ningún QR");
            onSubmit(null);
          }
        }
      };
    } else {
      console.log("Por favor, selecciona una imagen.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Adjunta una imagen con QR
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 block w-full"
          required
        />
      </div>

      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="Vista previa"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Leer QR
      </button>
    </form>
  );
}
