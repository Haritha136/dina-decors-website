import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    let err = {};

    if (!data.from_name.trim()) err.from_name = "Name is required";

    if (!data.from_email.trim()) {
      err.from_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.from_email)) {
      err.from_email = "Invalid email";
    }

    if (!data.phone.trim()) {
      err.phone = "Phone is required";
    }

    if (!data.event_type.trim()) err.event_type = "Select event type";

    if (!data.event_date) err.event_date = "Select date";

    if (!data.event_time) err.event_time = "Select time";

    return err;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      phone: form.current.phone.value,
      event_type: form.current.event_type.value,
      event_date: form.current.event_date.value,
      event_time: form.current.event_time.value,
      message: form.current.message.value,
    };

    const validation = validate(data);
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    emailjs.sendForm(
      "service_2f05kgr",
      "template_n8ucy8l",
      form.current,
      "m1-Tz8LyhtzWGg5J-"
    ).then(() => {
      alert("Event request sent!");
      form.current.reset();
      setErrors({});
    });
  };

return (
  <section id="contact" className="contact-luxury">

    <div className="contact-overlay">

      <div className="contact-heading">
        <span>LET'S CREATE SOMETHING BEAUTIFUL</span>

        <h2>Book Your Dream Event</h2>

        <p>
          Weddings, receptions, birthdays and corporate events
          planned with elegance and perfection.
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="event-form">

        <input name="from_name" placeholder="Full Name" />
        {errors.from_name && <p>{errors.from_name}</p>}

        <input name="from_email" placeholder="Email Address" />
        {errors.from_email && <p>{errors.from_email}</p>}

        <input name="phone" placeholder="Phone Number" />
        {errors.phone && <p>{errors.phone}</p>}

        <select name="event_type">
          <option value="">Select Event Type</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Corporate Event</option>
          <option>Concert</option>
          <option>Other</option>
        </select>

        {errors.event_type && <p>{errors.event_type}</p>}

        <input type="date" name="event_date" />
        {errors.event_date && <p>{errors.event_date}</p>}

        <input type="time" name="event_time" />
        {errors.event_time && <p>{errors.event_time}</p>}

        <input
          name="guest_count"
          placeholder="Number of Guests (Optional)"
        />

        <textarea
          name="message"
          placeholder="Tell us about your event..."
          rows="5"
        />

        <button type="submit">
          Book Consultation
        </button>

      </form>

    </div>

  </section>
);
}

export default Contact;