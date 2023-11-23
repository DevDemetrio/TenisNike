import { styled } from "styled-components";

const HeaderStyled = styled.header``;
const DivStyledPromotion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "MontserratBold";
  height: 3.75rem;
  font-size: 1rem;
  background-color: #00aeff;
`;
const DivName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  height: 3.75rem;
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
