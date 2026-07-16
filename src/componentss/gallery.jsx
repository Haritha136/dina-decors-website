import React, { useState } from "react";
import bgImage from"../assetso/gallery35.jpeg";
import "./gallery.css";
import gallery38 from "../assetso/gallery38.jpeg";
import gallery39 from "../assetso/gallery39.jpeg";
import gallery3 from "../assetso/gallery31.jpeg";
import gallery4 from "../assetso/gallery4.jpeg";

import gallery21 from "../assetso/gallery21.png";
import gallery40 from "../assetso/gallery40.jpeg";
import gallery41 from "../assetso/gallery41.jpeg";
import gallery8 from "../assetso/gallery8.png";

import gallery9 from "../assetso/gallery9.png";
import gallery10 from "../assetso/gallery10.png";
import gallery11 from "../assetso/gallery11.png";
import gallery12 from "../assetso/gallery12.png";

import gallery13 from "../assetso/gallery13.png";
import gallery14 from "../assetso/gallery14.png";
import gallery15 from "../assetso/gallery15.png";
import gallery16 from "../assetso/gallery16.png";

function Gallery() {
  const [category, setCategory] = useState("intimate");

  const images = {
  intimate: [
    gallery38,
    gallery39,
    gallery3,
    gallery4,
  ],

  traditional: [
    gallery21,
    gallery40,
    gallery41,
    gallery8,
  ],

  destination: [
    gallery9,
    gallery10,
    gallery11,
    gallery12,
  ],

  luxury: [
    gallery13,
    gallery14,
    gallery15,
    gallery16,
  ],
};

  return (
    <section id="gallery" className="gallery-section"
    style={{backgroundImage:`url(${bgImage})`}}>
      <div className="overlay">
        <div className="gallery-header">
          <h2>Our Wedding Gallery</h2>
          <p>Explore unforgettable moments crafted by Dina Decor & Event Planners</p>
        </div>

        <div className="gallery-buttons">
          <button
            className={category === "intimate" ? "active" : ""}
            onClick={() => setCategory("intimate")}
          >
            Intimate
          </button>

          <button
            className={category === "traditional" ? "active" : ""}
            onClick={() => setCategory("traditional")}
          >
            Traditional
          </button>

          <button
            className={category === "destination" ? "active" : ""}
            onClick={() => setCategory("destination")}
          >
            Destination
          </button>

          <button
            className={category === "luxury" ? "active" : ""}
            onClick={() => setCategory("luxury")}
          >
            Luxury
          </button>
        </div>

        <div className="gallery-grid">
          {images[category].map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;