import ServiceCards from"./servicecards";
import gallery20 from"../assetso/gallery20.png";
function LuxuryWedding(){
  return (
    <div className="luxury-page">
      <h1>Luxury Wedding Planning</h1>

      <img
        src={gallery20}
        alt="Luxury Wedding"
        className="luxury-image"
      />

      <p>
        We create unforgettable luxury weddings with elegant
        décor, premium venues, floral arrangements, lighting,
        entertainment, and complete event coordination.
      </p>
      <ServiceCards/>
    </div>
  );
}

export default LuxuryWedding;