import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ fontFamily: "sans-serif" }}>
      <header style={{ padding: "60px 20px", background: "#f8f9fa" }}>
        <h1>Reymond Hallazgo Espinosa</h1>
        <h2>IT Professional | Web Developer | Identity Governance Specialist</h2>
      </header>

      <section style={{ padding: "40px 20px" }}>
        <h3>About Me</h3>
        <p>
          A results-driven IT professional with over 5 years of experience specializing in web development and identity governance. Passionate about building efficient, secure, and scalable enterprise solutions.
        </p>
      </section>

      <section style={{ padding: "40px 20px", background: "#f1f3f5" }}>
        <h3>Technical Skills</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {["Java", "SailPoint IIQ", "Web Development", "SQL", "HTML", "CSS", "JavaScript", "Git", "Spring Boot"].map((skill, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>✅ {skill}</li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "40px 20px" }}>
        <h3>Projects</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><strong>Identity Governance Automation:</strong> Automated user provisioning and access certification using SailPoint IIQ.</li>
          <li><strong>Internal Web Portal:</strong> Built a full-stack web app using Java and React for internal operations.</li>
          <li><strong>Access Validation Tool:</strong> Created a Java-based tool for cross-system user data verification.</li>
        </ul>
      </section>

      <section style={{ padding: "40px 20px", background: "#f8f9fa" }}>
        <h3>Contact</h3>
        <p>Email: <a href="mailto:reymond@example.com">reymond@example.com</a></p>
      </section>

      <footer style={{ padding: "20px", borderTop: "1px solid #dee2e6", color: "#6c757d" }}>
        © {new Date().getFullYear()} Reymond Espinosa. All rights reserved.
      </footer>
    </div>
  );
}

export default App;