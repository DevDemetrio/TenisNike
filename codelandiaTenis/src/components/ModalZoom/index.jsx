import Imagem from "../Gallery/Imagem";
import { styled } from "styled-components";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const DialogoStyled = styled.dialog`
  position: absolute;
  top: 294px;
`;
const ModalZoom = ({ photo }) => {
  return (
    <>
      {photo && (
        <>
          <Overlay /> (
          <DialogoStyled open={!!photo}>
            <Imagem photo={photo} expandida={true} />
            <p>Olá para todos!</p>
            <form action="dialog">
              <button>Ok</button>
            </form>
          </DialogoStyled>
          )
        </>
      )}
    </>
  );
};

export default ModalZoom;
