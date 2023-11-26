const Gallery = ({ photos = [] }) => {
  return (
    <>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>{photo.path}</li>
        ))}
        ;
      </ul>
    </>
  );
};

export default Gallery;
