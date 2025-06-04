import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#333" }}>Witamy w e-Weterynarz</h1>
        <p style={{ fontSize: "1.125rem", color: "#555" }}>
          Szybka i wygodna rejestracja wizyt u weterynarza online.
        </p>
      </header>
      <main style={{ maxWidth: "600px", margin: "0 auto" }}>
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.75rem", color: "#444" }}>Dlaczego warto skorzystać?</h2>
          <ul style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6" }}>
            <li>Łatwa rejestracja przez internet</li>
            <li>Przypomnienia o nadchodzących wizytach</li>
            <li>Historia wizyt dostępna w panelu użytkownika</li>
          </ul>
        </section>
        <section style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1rem", color: "#666", marginBottom: "1rem" }}>
            Gotowy umówić wizytę? Przejdź do rejestracji już teraz.
          </p>
          <Link to="/rejestracja" style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#007acc",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "1rem"
          }}>
            Przejdź do rejestracji
          </Link>
        </section>
      </main>
    </div>
  );
}

function RejestracjaPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#333" }}>Rejestracja na wizytę</h1>
      </header>
      <main style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Tutaj później wstawisz formularz rejestracyjny */}
        <p style={{ color: "#555" }}>Formularz rejestracyjny będzie tutaj.</p>
      </main>
      <footer style={{ textAlign: "center", marginTop: "3rem", color: "#999" }}>
        <Link to="/">← Powrót na stronę główną</Link>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rejestracja" element={<RejestracjaPage />} />
      </Routes>
    </Router>
  );
}
