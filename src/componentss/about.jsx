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
  At DINA Decors and Event Planners, we believe every celebration deserves to be extraordinary.
  We are a passionate event management and decoration company dedicated to transforming your special
  moments into unforgettable memories through creative designs, elegant decorations, 
  and flawless event execution.
</p>
<p>
With expertise in weddings, receptions, engagements, birthdays, corporate events, stage decorations
and special celebrations, our team works closely with clients to understand their vision and bring it 
to life with perfection. From luxurious floral arrangements and stunning stage setups to customized 
themes and premium décor concepts, we ensure every detail reflects beauty, style, and sophistication.
</p>
<p>
Our commitment to quality, creativity, and customer satisfaction has helped us create memorable 
experiences for countless clients. Whether you dream of a grand wedding celebration or an intimate 
family gathering, DINA Decors and Event Planners delivers personalized solutions that exceed expectations.
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