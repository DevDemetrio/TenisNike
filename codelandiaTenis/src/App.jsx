import { styled } from "styled-components";
import Banner from "./components/Banner";
import EstilosGlobais from "./components/EstilosGlobais";
import Header from "./components/Header";
import bannerBackground from "./assets/Air-jordan.png";
import Highlights from "./components/highlights";
import phonto from "./img.json";
import Gallery from "./components/Gallery";
import { useState } from "react";
import Footer from "./components/Footer";
import ModalZoom from "./components/ModalZoom";

const ContaineMain = styled.main``;
const App = () => {
  const [photoGallery, setPhotoGallery] = useState(phonto);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavorite = (photo) => {
    setSelectedPhoto(
      phonto.map((photoGallery) => {
        return {
          ...photoGallery,
          favorite:
            photoGallery.id === photo.id ? !photo.favorite : photo.favorite,
        };
      })
    );
  };
  return (
    <>
      <EstilosGlobais />
      <Header />
      <ContaineMain>
        <Banner
          backgroundImage={bannerBackground}
          title={"A melhor loja de Jordan"}
          text={
            "O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."
          }
        />
        <Highlights />
        <Gallery
          thePhotoSelected={(photo) => setSelectedPhoto(photo)}
          toggleFavorite={toggleFavorite}
          photos={photoGallery}
        />
      </ContaineMain>
      <Footer />
      <ModalZoom photo={selectedPhoto} />
    </>
  );
};

export default App;
