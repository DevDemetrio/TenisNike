import ButtonIcon from "../ButtonIcon";
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
  form {
    button {
      position: relative;
      bottom: 380px;
      left: 350px;
    }
    img {
      display: block;
      background-color: aquamarine;
    }
  }
`;
const ModalZoom = ({ photo, toggleFavorite, theClose }) => {
  return (
    <>
      {photo && (
        <>
          <Overlay /> (
          <DialogoStyled open={!!photo} onClose={theClose}>
            <Imagem
              photo={photo}
              expandida={true}
              toggleFavorite={toggleFavorite}
            />
            <form action="dialog">
              <ButtonIcon formMethod="dialog">
                <img src="/icones/fechar.png" alt="" />
              </ButtonIcon>
            </form>
          </DialogoStyled>
          )
        </>
      )}
    </>
  );
};

export default ModalZoom;
