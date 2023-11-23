import { styled } from "styled-components";

const BannerSection = styled.section`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat;

  height: 300px;
`;

const BannerTitle = styled.h1`
  font-size: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
const BannerText = styled.p`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
const Banner = ({ backgroundImage, title, text }) => {
  return (
    <BannerSection $backgroundImage={backgroundImage}>
      <BannerTitle>{title}</BannerTitle>
      <BannerText>{text}</BannerText>
    </BannerSection>
  );
};

export default Banner;
