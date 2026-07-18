import React, { useState } from "react";
import bgImage from"../assetso/gallery35.jpeg";
import "./gallery.css";
import gallery38 from "../assetso/gallery38.jpeg";
import gallery54 from "../assetso/gallery54.png";
import gallery55 from "../assetso/gallery55.png";
import gallery4 from "../assetso/gallery4.jpeg";

import gallery21 from "../assetso/gallery21.png";
import gallery40 from "../assetso/gallery40.jpeg";
import gallery41 from "../assetso/gallery41.jpeg";
import gallery8 from "../assetso/gallery8.png";

import gallery9 from "../assetso/gallery9.png";
import gallery51 from "../assetso/gallery51.jpeg";
import gallery53 from "../assetso/gallery53.jpeg";
import gallery12 from "../assetso/gallery12.png";

import gallery13 from "../assetso/gallery13.png";
import gallery52 from "../assetso/gallery52.png";
import gallery50 from "../assetso/gallery50.png";
import gallery1 from "../assetso/gallery1.jpeg";

function Gallery() {
  const [category, setCategory] = useState("intimate");

  const images = {
  intimate: [
    gallery54,
    gallery38,
    gallery55,
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
    gallery51,
    gallery53,
    gallery12,
  ],

  luxury: [
    gallery50,
    gallery52,
    gallery13,
    gallery1,
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