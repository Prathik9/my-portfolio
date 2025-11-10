const projects = [
  {
    icon: "🛒",
    title: "DishHome Go (OTT) Application",
    description:
              `Developed a custom React-based video player integrated with Video.js and Node.js backend APIs for
              dynamic ad insertion, boosting ad revenue by 30%.
              Optimized Node.js video content APIs and React front-end integration, improving playback speed and
              reducing buffering time for a smoother user experience.`,
    tags: ["React", "Node.js", "MongoDB"],
    links: { demo: "#", github: "#" },
  },
  {
    icon: "📊",
    title: "Streamer (Live and VOD Streaming)",
    description: `Designed and built React-based front-end interfaces for seamless video playback and navigation.
                  Created Node.js and Python (FastAPI) backend APIs managing sessions, playback authorization, and metadata
                  delivery.
                  Integrated WebSocket communication for real-time updates (status sync, live notifications).
                  Initiated development of an NLP-based chatbot for user support, automating responses using Python.`,
    tags: ["React", "Node.js", "Websockets"," FastAPI"],
    links: { demo: "#", github: "#" },
  },
  {
    icon: "💬",
    title: "Videowall",
    description:
      "Contributed as a Back-End Developer to a hyper-dense video monitoring solution capable of managing up to 320 streams on a single display. Responsible for extracting data from various applications and delivering it to the frontend using Node.js and MongoDB. Focused on ensuring efficient data flow and integration for smooth video monitoring.",
    tags: ["Pyqt", "Socket.io", "Python","FastAPI"],
    links: { demo: "#", github: "#" },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-image">{p.icon}</div>
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.links.demo} className="project-link" target="_blank">
                  Live Demo →
                </a>
                <a
                  href={p.links.github}
                  className="project-link"
                  target="_blank"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
