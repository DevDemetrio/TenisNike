import { styled } from "styled-components";

const BannerSection = styled.section`
  display: flex;
  background-image: ${(props) =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 120px;
  background-size: 100%;
  min-height: 377px;
`;

const TextContainer = styled.div`
  margin: 0 auto;
`;

const BannerTitle = styled.h1`
  margin-bottom: 12px;

  font-size: 1.75rem;
  color: rgba(249, 249, 249, 1);
`;
const BannerText = styled.p`
  width: 357px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 28px;
  color: rgba(249, 249, 249, 1);
`;

const Banner = ({ backgroundImage, title, text }) => {
  return (
    <BannerSection $backgroundImage={backgroundImage}>
      <TextContainer>
        <BannerTitle>{title}</BannerTitle>
        <BannerText>{text}</BannerText>
      </TextContainer>
    </BannerSection>
  );
};

export default Banner;
