import aboutImage from "../assets/about-me.svg"; // add your SVG file here

export default function About() {
    return (
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I’m a backend-focused developer with expertise in Python, FastAPI, Node.js, and React. 
              I love designing scalable systems, media pipelines, and interactive UIs.
            </p>
            <p>
              Outside of work, I enjoy learning about AI, Rust, and exploring real-time streaming technologies.
            </p>
          </div>
          <div className="about-image">
                      <img src={aboutImage} alt="Developer Illustration" />
          </div>
        </div>
      </section>
    );
  }
  