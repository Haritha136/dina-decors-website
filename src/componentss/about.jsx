import aboutImage from "../assetso/gallery34.webp";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-image">
        <img src={aboutImage} alt="About Dina Decor and Event Planners" />
      </div>

      <div className="about-content">
        <h2>About Dina Decor and Event Planners</h2>

        <p>
          Dina Decor and Event Planners specializes in creating elegant
          weddings, receptions, engagements and memorable
          celebrations with premium decoration concepts.
        </p>

        <button
          onClick={() => {
            document.getElementById("services").scrollIntoView({ behavior: "smooth" });
          }}
        >
          Know More
        </button>
      </div>

    </section>
  );
}

export default About;