import Imagem from "./Imagem";
const Gallery = ({ photos = [], thePhotoSelected, toggleFavorite }) => {
  return (
    <>
      {photos.map((photo) => (
        <Imagem
          requestedZoom={thePhotoSelected}
          toggleFavorite={toggleFavorite}
          key={photo.id}
          photo={photo}
        />
      ))}
    </>
  );
};

export default Gallery;
