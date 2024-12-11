import Design from "./Design";

function Gallery({ designs = [] }) {
  return (
    <>
      {designs?.map((design) => (
        <Design
          key={design?._id}
          pixels={design?.design}
        />
      ))}
    </>
  );
}

export default Gallery;
