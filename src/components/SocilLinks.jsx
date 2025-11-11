import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

export default function SocialLinks({ size = "1.5rem", color = "#60a5fa" }) {
  const links = [
    {
      href: "https://github.com/Prathik9",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/prathik-n-332486347/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "/Prathik-N-MP.pdf",
      label: "Resume",
      icon: <FaFileAlt />,
    },
  ];

  return (
    <div className="social-links-component">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="social-link"
          title={link.label}
          style={{ fontSize: size, color }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
