import { styled } from "styled-components";
import ButtonIcon from "../../ButtonIcon";

const FigureStyle = styled.figure`
  width: 23.37rem;
  height: 16.87rem;
  background-color: rgba(235, 233, 234, 1);
  margin: 3.68rem auto 1.875rem auto;
`;

const FooterStyle = styled.footer`
  background-color: rgba(0, 0, 0, 0.6);
  width: 23.37rem;
  height: 60px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FigcationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FigcationStyled = styled.figcaption``;
const Imagem = ({ photo }) => {
  return (
    <FigcationContainer>
      <FigureStyle>
        <div>
          <img src={photo.path} alt={photo.fonte} />
        </div>
        <h3>{photo.titulo}</h3>
        <FigcationStyled>
          <FooterStyle>
            <div>
              <ButtonIcon>
                <img src="icones/favorito-ativo.png" alt="" />
              </ButtonIcon>
            </div>
            <div>
              <ButtonIcon>
                <img src="icones/expandir.png" alt="" />
              </ButtonIcon>
            </div>
          </FooterStyle>
        </FigcationStyled>
      </FigureStyle>
    </FigcationContainer>
  );
};

export default Imagem;
