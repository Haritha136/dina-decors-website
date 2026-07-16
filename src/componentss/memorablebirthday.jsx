import ServiceCards from"./servicecards";
function MemorableBirthday() {
  return (
    <div className="luxury-page">
      <h1>Memorable Birthday</h1>

      <img
        src="/images/memorable-birthday.jpg"
        alt="Memorable Birthday"
      />

      <p>
        Make every birthday unforgettable with creative
        themes, balloon decorations, customized setups,
        entertainment, cakes, and complete celebration
        planning.
      </p>
      <ServiceCards/>
    </div>
  );
}

export default MemorableBirthday;