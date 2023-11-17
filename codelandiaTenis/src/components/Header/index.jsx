import { styled } from "styled-components";

const HeaderStyled = styled.header``;
const DivStyledPromotion = styled.div`
  font-size: 1rem;

  background-color: #00aeff;
  text-align: center;
`;
const DivName = styled.div`
  font-size: 1.5rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <DivStyledPromotion>
        <p>Ganhe R$10,00 de desconto no frete</p>
      </DivStyledPromotion>
      <DivName>
        <p>JordanShoes</p>
      </DivName>
    </HeaderStyled>
  );
};

export default Header;
