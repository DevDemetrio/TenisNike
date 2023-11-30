import { styled } from "styled-components";
import ButtonIcon from "../../ButtonIcon";
const FigureStyle = styled.figure`
  width: 23.37rem;
  height: 18.87rem;
  background-color: rgba(235, 233, 234, 1);
  margin: 3.68rem auto 1.875rem auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FooterStyle = styled.footer`
  background-color: aqua;
`;

const FigcationStyled = styled.figcaption``;
const Imagem = ({ photo }) => {
  return (
    <FigureStyle>
      <div>
        <img src={photo.path} alt={photo.fonte} />
      </div>
      <FigcationStyled>
        <h3>{photo.titulo}a</h3>
        <FooterStyle>
          <ButtonIcon>
            <img src="../" alt="" />
          </ButtonIcon>
        </FooterStyle>
      </FigcationStyled>
    </FigureStyle>
  );
};

export default Imagem;
