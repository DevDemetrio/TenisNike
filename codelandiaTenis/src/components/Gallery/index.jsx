import Imagem from "./Imagem";
const Gallery = ({ photos = [] }) => {
  return (
    <>
      {photos.map((photo) => (
        <Imagem key={photo.id} photo={photo} />
      ))}
    </>
  );
};

export default Gallery;
