import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Obtener la URL del query parameter
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "URL no proporcionada" },
      { status: 400 }
    );
  }

  try {
    // Hacer la solicitud al servidor externo
    const response = await fetch(url);
    const data = await response.text();

    // Devolver la respuesta al cliente
    return new NextResponse(data, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener el recurso" },
      { status: 500 }
    );
  }
}
