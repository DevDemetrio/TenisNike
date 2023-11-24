import { styled } from "styled-components";

const BannerSection = styled.section`
  background-image: ${(props) =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.$backgroundImage})`};

  background-repeat: no-repeat;

  background-size: cover;
  padding-top: 120px;
  background-size: 100%;
  min-height: 377px;
  margin: 0 auto;
`;

const BannerTitle = styled.h1`
  text-align: center;
  margin-bottom: 12px;
  font-size: 1.75rem;
  color: rgba(249, 249, 249, 1);
`;
const BannerText = styled.p`
  width: 350px;
  margin: 0 auto;
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
  line-height: 34px;
  color: rgba(249, 249, 249, 1);
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
