import { useState } from "react";
import { createPortal } from "react-dom";
import TerminosModal from "./terminosModal";

export default function TerminosBoton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className="underline">
        Términos y condiciones
      </button>
      {showModal &&
        createPortal(
          <TerminosModal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
