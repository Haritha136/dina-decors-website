import gallery26 from"../assetso/gallery26.jpeg";
import gallery27 from"../assetso/gallery27.png";
import gallery2 from"../assetso/gallery2.jpeg";
import gallery11 from"../assetso/gallery11.png";
import gallery12 from"../assetso/gallery12.png";

function ReceptionNight() {
  const galleryImages=[gallery26,
    gallery27,
    gallery2,
    gallery11,
  gallery12,

  ];
  return (
    <div className="luxury-page">
      <h1>Reception Night</h1>

      <img
        src={gallery2}
        alt="Reception Night"
        className="reception-night"
      />

      <p>
        Celebrate your special evening with stunning stage
        decorations, elegant lighting, live entertainment,
        floral arrangements, and complete reception event
        management.
      </p>
      <div className="gallery-section">
        <h2>Our Theme Based Decor</h2>
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
  );
}

export default ReceptionNight;