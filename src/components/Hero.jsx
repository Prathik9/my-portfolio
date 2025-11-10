import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import devIllustration from "../assets/dev-illustration.svg"; // add your SVG file here
import SocialLinks from "./SocilLinks.jsx";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        {/* LEFT SIDE - TEXT CONTENT */}
        <div className="hero-content">
          <div className="hero-greeting">👋 Hello, I'm</div>
          <h1 className="hero-name">Prathik N</h1>
          <h2 className="hero-title">Full Stack Developer</h2>
          <p className="hero-description">
            I build scalable, high-performance web and streaming applications using
            Python, Node.js, React, and modern cloud technologies.
          </p>

          <SocialLinks size="1.8rem" />

          {/* CTA Buttons */}
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="hero-image">
          <img src={devIllustration} alt="Developer Illustration" />
        </div>
      </div>
    </section>
  );
}
