import ServiceCards from"./servicecards";
import gallery8 from"../assetso/gallery8.png";
import gallery9 from"../assetso/gallery9.png";
import gallery13 from"../assetso/gallery13.png";
import gallery14 from"../assetso/gallery14.png";
import gallery17 from"../assetso/gallery17.png";
import gallery20 from"../assetso/gallery20.png";
import gallery23 from"../assetso/gallery23.png";
import gallery5 from"../assetso/gallery5.png";

function DestinationWedding() {
  const galleryImages=[gallery8,
    gallery9,
    gallery13,
    gallery14,
  gallery17,
    gallery20,
    gallery23,

  ];
  return (
    <div className="luxury-page">
      <h1>Destination Wedding</h1>

      <img
        src={gallery5}
        alt="Destination Wedding"
        className="destination-image"
      />

      <p>
        Enhance your event with premium floral decorations,
        fresh flower arrangements, stage designs, entrance
        arches, table centerpieces, and customized floral
        themes.
      </p>
      <div className="gallery-section">
        <div className="=gallery-header">
        <h2>Our Destination Weddings</h2>
        <div className="gallery-grid">
          {galleryImages.map((img,index) =>(
            <img
            key={index}
            src={img}
            alt={`Destination Wedding ${index+1}`}
            />
          ))}
        </div>
      </div>
        </div>

      <ServiceCards/>
    </div>
  );
}

export default DestinationWedding;