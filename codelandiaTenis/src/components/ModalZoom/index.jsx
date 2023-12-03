import Imagem from "../Gallery/Imagem";

const ModalZoom = ({ foto }) => {
  return (
    <>
      {foto && (
        <dialog open={!!foto}>
          <Imagem foto={foto} expandida={true} />
          <p>Olá para todos!</p>
          <form action="dialog">
            <button>Ok</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default ModalZoom;
