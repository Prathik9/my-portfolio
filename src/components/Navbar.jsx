import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import SocialLinks from "./SocilLinks";

export default function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">PRATHIK</div>

        <ul className="nav-links">
          <li><button onClick={() => handleScroll("home")} className="nav-btn">Home</button></li>
          <li><button onClick={() => handleScroll("about")} className="nav-btn">About</button></li>
          <li><button onClick={() => handleScroll("projects")} className="nav-btn">Projects</button></li>
          <li><button onClick={() => handleScroll("contact")} className="nav-btn">Contact</button></li>
        </ul>

        <SocialLinks size="1.5rem" />
      </div>
    </nav>
  );
}
