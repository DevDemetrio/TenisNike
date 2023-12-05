import Imagem from "../Gallery/Imagem";

const ModalZoom = ({ photo }) => {
  return (
    <>
      {photo && (
        <dialog open={!!photo}>
          <Imagem photo={photo} expandida={true} />
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
