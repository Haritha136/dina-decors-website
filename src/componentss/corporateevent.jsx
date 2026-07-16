import ServiceCards from"./servicecards";
function CorporateEvent() {
  return (
    <div className="luxury-page">
      <h1>Corporate Event</h1>

      <img
        src="/images/corporate-event.jpg"
        alt="Corporate Event"
      />

      <p>
        Professional corporate event management including
        conferences, product launches, seminars, award
        ceremonies, branding solutions, and complete event
        execution.
      </p>
      <ServiceCards/>
    </div>
  );
}

export default CorporateEvent;