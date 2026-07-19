function Stats() {
  const stats = [
    { number: "1500+", label: "Happy Couples" },
    { number: "4.9/5", label: "Google Rating" },
    { number: "8+", label: "Years Of Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="stats">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <h2>{stat.number}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;