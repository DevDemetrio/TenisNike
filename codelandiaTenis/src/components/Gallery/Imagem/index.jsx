import { styled } from "styled-components";
import ButtonIcon from "../../ButtonIcon";

const FigureStyle = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  width: 23.37rem;
  height: 16.87rem;
  background-color: rgba(235, 233, 234, 1);
  margin: 3.68rem auto 1.875rem auto;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

const Imagem = ({
  photo,
  expandida = false,
  requestedZoom,
  toggleFavorite,
}) => {
  const iconFavorite = photo.favorite
    ? "/icones/favorito-ativo.png"
    : "/icones/favorito.png";
  return (
    <FigcationContainer>
      <FigureStyle $expandida={expandida} id={`photo-${photo.id}`}>
        <div>
          <div>
            <img src={photo.path} alt={photo.fonte} />
          </div>
          <h3>{photo.titulo}</h3>
        </div>
        <FigcationStyled>
          <FooterStyle>
            <div>
              <ButtonIcon onClick={() => toggleFavorite(photo)}>
                <img src={iconFavorite} alt="" />
              </ButtonIcon>
            </div>
            <div>
              {!expandida && (
                <ButtonIcon
                  aria-hidden={expandida}
                  onClick={() => requestedZoom(photo)}
                >
                  <img src="icones/expandir.png" alt="" />
                </ButtonIcon>
              )}
            </div>
          </FooterStyle>
        </FigcationStyled>
      </FigureStyle>
    </FigcationContainer>
  );
};

export default Imagem;
