function ServiceCards() {
  const cards = [
    {
      icon: "🏛️",
      title: "Right Spaces, Right Partners",
      desc: "Premium venues and trusted partners selected to create unforgettable celebrations."
    },
    {
      icon: "👥",
      title: "Guest Experience Planning",
      desc: "Curated entertainment and memorable experiences designed for every guest."
    },
    {
      icon: "🌸",
      title: "Floral & Decor Styling",
      desc: "Elegant floral arrangements and stunning decor tailored to your vision."
    },
    {
      icon: "🎵",
      title: "Sound & Lighting",
      desc: "Professional lighting and sound solutions to elevate every moment."
    }
  ];

  return (
    <div className="service-cards">
      {cards.map((card, index) => (
        <div className="service-card" key={index}>
          <div className="icon">{card.icon}</div>

          <h2>{card.title}</h2>

          <p>{card.desc}</p>

          <button>Learn More →</button>
        </div>
      ))}
    </div>
  );
}

export default ServiceCards;