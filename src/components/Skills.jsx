import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaDocker,
    FaGitAlt,
    FaAws,
  } from "react-icons/fa";
  import {
    SiFastapi,
    SiDjango,
    SiMongodb,
    SiPostgresql,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiRust,
  } from "react-icons/si";
  
  import { useEffect, useRef } from "react";
  
  const skills = [
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <SiDjango color="#61DAFB" />, name: "Django" },
    { icon: <SiFastapi color="#05998B" />, name: "FastAPI" },
    { icon: <FaNodeJs color="#68A063" />, name: "Node.js" },
    { icon: <FaPython color="#3776AB" />, name: "Python" },
    { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
    { icon: <SiPostgresql color="#31648C" />, name: "PostgreSQL" },
    { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
    { icon: <SiHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <SiCss3 color="#1572B6" />, name: "CSS3" },
    { icon: <SiTailwindcss color="#38BDF8" />, name: "TailwindCSS" },
    { icon: <FaDocker color="#0db7ed" />, name: "Docker" },
    { icon: <FaGitAlt color="#F05032" />, name: "Git" },
    { icon: <FaAws color="#FF9900" />, name: "AWS" },
    { icon: <SiRust color="#DEA584" />, name: "Rust" },
  ];
  
  export default function Skills() {
    const scrollRef = useRef(null);
  
    useEffect(() => {
      const container = scrollRef.current;
  
      const scrollSpeed = 1.5; // pixels per frame
      const interval = setInterval(() => {
        if (container) {
          container.scrollLeft += scrollSpeed;
  
          // if at end, restart
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0;
          }
        }
      }, 20); // adjust timing for smoothness
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section className="section" style={{ background: "#1e293b" }}>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-scroll-container" ref={scrollRef}>
          <div className="skills-scroll-inner">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card-horizontal">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  