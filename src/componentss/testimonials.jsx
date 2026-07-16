
import { useState, useEffect } from "react";

function Testimonials() {
  const testimonials = [
  {
    name: "Anjali",
    review:
      "The wedding decoration was absolutely stunning. Every detail was beautifully arranged and exceeded our expectations.",
  },
  {
    name: "Rahul",
    review:
      "Professional service and amazing creativity. Our reception looked elegant and memorable.",
  },
  {
    name: "Meera",
    review:
      "Dina Decors transformed our engagement into a magical celebration. Highly recommended!",
  },
  {
    name: "Arjun",
    review:
      "Beautiful floral arrangements and excellent stage decoration. Everyone loved the ambience.",
  },
  {
    name: "Priya",
    review:
      "Very friendly team with great attention to detail. Our wedding venue looked like a dream.",
  },
  {
    name: "Sneha",
    review:
      "The decorations were classy, elegant, and exactly as we had imagined. Thank you for making our day special.",
  },
  {
    name: "Vishnu",
    review:
      "Excellent service from planning to execution. Everything was completed on time and perfectly.",
  },
  {
    name: "Akhil",
    review:
      "The lighting and floral decorations completely transformed the venue. Highly professional team.",
  },
  {
    name: "Nandana",
    review:
      "We received so many compliments from our guests. The decor was simply breathtaking.",
  },
  {
    name: "Sreejith",
    review:
      "Creative ideas, affordable pricing, and outstanding execution. I would definitely recommend Dina Decors.",
  },
  {
    name: "Gayathri",
    review:
      "Our engagement stage looked elegant and luxurious. The team exceeded all our expectations.",
  },
  {
    name: "Kiran",
    review:
      "Amazing experience! Every decoration was thoughtfully designed, making our event unforgettable.",
  },
  {
    name: "Divya",
    review:
      "Professional, punctual, and incredibly talented. The decorations created the perfect atmosphere.",
  },
  {
    name: "Abhinav",
    review:
      "Fantastic work! The team paid attention to every small detail and delivered beyond what we expected.",
  },
  {
    name: "Lakshmi",
    review:
      "From floral arrangements to stage setup, everything was beautiful. Thank you for making our wedding memorable.",
  }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(slider);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="testimonial-slider">
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>

          <p>{testimonials[current].review}</p>

          <h4>- {testimonials[current].name}</h4>
        </div>

        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={index === current ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;