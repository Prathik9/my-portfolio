import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <section id="contact" className="section" style={{ background: "#1e293b" }}>
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <p className="contact-description">
          I'm always open to discussing new projects or creative collaborations.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" className="form-input" required />
          <input type="email" placeholder="Your Email" className="form-input" required />
          <textarea placeholder="Your Message" className="form-textarea" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        {submitted && <div className="success-message show">✓ Thank you! Your message has been sent.</div>}
      </div>
    </section>
  );
}
