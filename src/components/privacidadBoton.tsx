import { useState } from "react";
import { createPortal } from "react-dom";
import PrivacidadModal from "./privacidadModal";

export default function PrivacidadBoton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className="underline">
        Política de privacidad
      </button>
      {showModal &&
        createPortal(
          <PrivacidadModal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
