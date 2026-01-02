import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [viewCount, setViewCount] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Proyek Dashboard AI",
      img: "/project1.jpg",
      tags: ["Python", "React"],
    },
    {
      id: 2,
      title: "E-Commerce Mobile",
      img: "/project1.jpg",
      tags: ["Flutter", "Go"],
    },
  ];

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <nav className="navbar">
        <div className="logo">
          ABD<span>.</span>
        </div>
        <div className="tabs">
          {["home", "projects", "contact"].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={activeTab === t ? "active" : ""}
            >
              {t}
            </button>
          ))}
        </div>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </nav>

      <div className="container">
        {activeTab === "home" && (
          <section className="hero">
            <img
              src="/me.jpg"
              className="profile-img"
              width="150"
              height="150"
            />
            <h1>
              Hi, I'm <span className="accent">Abdulrahman</span>
            </h1>
            <p>Full Stack Engineer | Views: {viewCount}</p>
            <button onClick={() => setViewCount(viewCount + 1)}>
              Say Hi! 👋
            </button>
          </section>
        )}

        {activeTab === "projects" && (
          <section className="grid">
            {projects.map((p) => (
              <div className="card" key={p.id}>
                <img src={p.img} alt={p.title} />
                <h3>{p.title}</h3>
                <div className="tags">{p.tags.join(", ")}</div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
