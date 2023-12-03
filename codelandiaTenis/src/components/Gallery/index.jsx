import Imagem from "./Imagem";
const Gallery = ({ photos = [], thePhotoSelected }) => {
  return (
    <>
      {photos.map((photo) => (
        <Imagem requestedZoom={thePhotoSelected} key={photo.id} photo={photo} />
      ))}
    </>
  );
};

export default Gallery;
