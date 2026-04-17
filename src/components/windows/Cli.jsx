import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.",
    },
    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `Frontend: React, Vanilla JS, Scss, HTML/CSS
                Backend: Node.js, Express, FastAPI, Python, Typescript
                Databases: MongoDB, PostgreSQL
                Tools: Git, Docker, Webpack, Vite`
    },
    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `1. Portfolio Website - React + Vite
                2. E-commerce Platform - MERN Stack
                3. Task Management App - Next.js
                4. Real-time Chat App - Socket.io
                5. Data Dashboard - React + Chart.js`,
    },
    experience: {
      description: "Display work experience",
      usage: "experience",
      fn: () => `Senior Developer @ Tech Corp (2026 - Present)
                - Led development of 5+ React applications
                - Mentored junior developers

               Full Stack Developer @ Web Solutions (2025 - 2026)
               - Built scalable APIs with Node.js
               - Designed responsive UIs with React`,
    },
    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `Email: saumyasindhu75@gmail.com
                Phone: 9810223773
                Location: Rohini, Delhi, India`,
    },
    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com", "_blank");
        return "Opening GitHub...";
      },
    },
    resume: {
      description: "Download resume",
      usage: "resume",
      fn: () => "Resume download started...",
    },
    social: {
      description: "View social media links",
      usage: "social",
      fn: () => `Twitter: @ankurdev
            LinkedIn: /in/saumyasindhu
            Portfolio: saumyasindhu.dev`,
    },
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`;

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"ankurprajapati:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
