import styled from "styled-components";

interface ModalProps {
  onClose: () => void;
}

export default function PrivacidadModal({ onClose }: ModalProps) {
  return (
    <StyledWrapper>
      <div
        className="modal"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={onClose}
      >
        <article className="modal-container">
          <header className="modal-container-header">
            <span className="modal-container-title">
              <svg
                aria-hidden="true"
                height={24}
                width={24}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"
                  fill="currentColor"
                />
              </svg>
              Política de privacidad
            </span>
            <button className="icon-button" onClick={onClose}>
              <svg
                height={24}
                width={24}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </header>
          <section className="modal-container-body rtf">
            <span>Aquí van todos las políticas alv</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unum
              nescio, quo modo possit, si luxuriosus sit, finitas cupiditates
              habere. Hoc est non modo cor non habere, sed ne palatum quidem.
              Sic, et quidem diligentius saepiusque ista loquemur inter nos
              agemusque communiter. Paulum, cum regem Persem captum adduceret,
              eodem flumine invectio? Quid igitur dubitamus in tota eius natura
              quaerere quid sit effectum? Duo Reges: constructio interrete.{" "}
            </p>
            <span>
              Ut proverbia non nulla veriora sint quam vestra dogmata.
            </span>
            <p>
              Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam
              philosophorum sit. Tria genera cupiditatum, naturales et
              necessariae, naturales et non necessariae, nec naturales nec
              necessariae. Sin aliud quid voles, postea. Consequatur summas
              voluptates non modo parvo, sed per me nihilo, si potest;{" "}
            </p>
            <p>
              Cur igitur easdem res, inquam, Peripateticis dicentibus verbum
              nullum est, quod non intellegatur? Primum in nostrane potestate
              est, quid meminerimus? Eam tum adesse, cum dolor omnis absit;
              Quodsi ipsam honestatem undique pertectam atque absolutam. Aliam
              vero vim voluptatis esse, aliam nihil dolendi, nisi valde pertinax
              fueris, concedas necesse est. Nec enim, cum tua causa cui
              commodes, beneficium illud habendum est, sed faeneratio, nec
              gratia deberi videtur ei, qui sua causa commodaverit. Universa
              enim illorum ratione cum tota vestra confligendum puto. Sed
              residamus, inquit, si placet. Sed vobis voluptatum perceptarum
              recordatio vitam beatam facit, et quidem corpore perceptarum.
              Itaque primos congressus copulationesque et consuetudinum
              instituendarum voluntates fieri propter voluptatem; Ita enim se
              Athenis collocavit, ut sit paene unus ex Atticis, ut id etiam
              cognomen videatur habiturus. Atque hoc loco similitudines eas,
              quibus illi uti solent, dissimillimas proferebas.{" "}
            </p>
          </section>
        </article>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button,
  .input,
  .select,
  .textarea {
    font: inherit;
  }

  a {
    color: inherit;
  }

  .modal-container {
    max-height: 400px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 600px) {
    .modal-container {
      width: 90%;
    }
  }

  .modal-container-header {
    padding: 16px 32px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal-container-title {
    display: flex;
    align-items: center;
    gap: 8px;
    line-height: 1;
    font-weight: 700;
    font-size: 1.125;
  }

  .modal-container-title svg {
    width: 32px;
    height: 32px;
    color: #750550;
  }

  .modal-container-body {
    padding: 24px 32px 51px;
    overflow-y: auto;
  }

  .rtf h1,
  .rtf h2,
  .rtf h3,
  .rtf h4,
  .rtf h5,
  .rtf h6 {
    font-weight: 700;
  }

  .rtf h1 {
    font-size: 1.5rem;
    line-height: 1.125;
  }

  .rtf h2 {
    font-size: 1.25rem;
    line-height: 1.25;
  }

  .rtf h3 {
    font-size: 1rem;
    line-height: 1.5;
  }

  .rtf > * + * {
    margin-top: 1em;
  }

  .rtf > * + :is(h1, h2, h3) {
    margin-top: 2em;
  }

  .rtf > :is(h1, h2, h3) + * {
    margin-top: 0.75em;
  }

  .rtf ul,
  .rtf ol {
    margin-left: 20px;
    list-style-position: inside;
  }

  .rtf ol {
    list-style: numeric;
  }

  .rtf ul {
    list-style: disc;
  }

  .modal-container-footer {
    padding: 20px 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #ddd;
    gap: 12px;
    position: relative;
  }

  .modal-container-footer:after {
    content: "";
    display: block;
    position: absolute;
    top: -51px;
    left: 24px;
    right: 24px;
    height: 50px;
    flex-shrink: 0;
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.75),
      transparent
    );
    pointer-events: none;
  }

  .button {
    padding: 12px 20px;
    border-radius: 8px;
    background-color: transparent;
    border: 0;
    font-weight: 600;
    cursor: pointer;
    transition: 0.15s ease;
  }

  .button.is-ghost:hover,
  .button.is-ghost:focus {
    background-color: #dfdad7;
  }

  .button.is-primary {
    background-color: #750550;
    color: #fff;
  }

  .button.is-primary:hover,
  .button.is-primary:focus {
    background-color: #4a0433;
  }

  .icon-button {
    padding: 0;
    border: 0;
    background-color: transparent;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.15s ease;
  }

  .icon-button svg {
    width: 24px;
    height: 24px;
  }

  .icon-button:hover,
  .icon-button:focus {
    background-color: #dfdad7;
  }
`;
