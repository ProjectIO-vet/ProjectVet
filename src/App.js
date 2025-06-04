import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Nagłówek */}
      <header
        style={{
          backgroundColor: "#004d40",
          color: "#fff",
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>BeKaRJ Vet</h1>
        <p style={{ fontSize: "1.125rem", margin: 0 }}>
          Profesjonalna opieka weterynaryjna dla Twojego pupila
        </p>
      </header>

      {/* Nawigacja */}
      <nav
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #ddd",
          padding: "0.5rem 1rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <Link to="/" style={{ color: "#004d40", fontWeight: "bold" }}>
          Strona Główna
        </Link>
        <Link to="/rejestracja" style={{ color: "#004d40", fontWeight: "bold" }}>
          Rejestracja
        </Link>
      </nav>

      {/* Sekcja główna */}
      <main style={{ flex: 1, padding: "2rem 1rem", maxWidth: "800px", margin: "0 auto" }}>
        {/* Hero */}
        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.75rem", color: "#004d40", marginBottom: "1rem" }}>
            Witamy w BeKaRJ Vet!
          </h2>
          <p style={{ fontSize: "1rem", color: "#555", marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Jesteśmy zaufaną kliniką weterynaryjną, której misją jest kompleksowa opieka nad
            Twoim zwierzakiem. Od profilaktyki, przez diagnostykę, aż po profesjonalne leczenie –
            zawsze stawiamy dobro pupila na pierwszym miejscu.
          </p>
          <Link
            to="/rejestracja"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#00796b",
              color: "#fff",
              borderRadius: "6px",
              fontSize: "1rem",
            }}
          >
            Zarejestruj wizytę
          </Link>
        </section>

        {/* Sekcja usług */}
        <section style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#004d40", marginBottom: "1rem" }}>
            Nasze usługi
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ fontSize: "1.25rem", color: "#00796b", marginBottom: "0.5rem" }}>
                Profilaktyka
              </h4>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.4" }}>
                Szczepienia, odrobaczanie, badania kontrolne – dbamy o zdrowie młodych i dorosłych
                zwierząt.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ fontSize: "1.25rem", color: "#00796b", marginBottom: "0.5rem" }}>
                Diagnostyka
              </h4>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.4" }}>
                Badania krwi, USG, RTG – nowoczesny sprzęt i doświadczeni lekarze.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ fontSize: "1.25rem", color: "#00796b", marginBottom: "0.5rem" }}>
                Chirurgia i zabiegi
              </h4>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.4" }}>
                Profesjonalna opieka w trakcie i po zabiegach chirurgicznych.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "1rem",
                borderRadius: "8px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ fontSize: "1.25rem", color: "#00796b", marginBottom: "0.5rem" }}>
                Stomatologia
              </h4>
              <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.4" }}>
                Pielęgnacja i leczenie zębów u psów i kotów – bez bólu i stresu dla zwierzaka.
              </p>
            </div>
          </div>
        </section>

        {/* Sekcja o nas */}
        <section style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#004d40", marginBottom: "1rem" }}>
            O nas
          </h3>
          <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
            BeKaRJ Vet to miejsce, w którym każdy pacjent (nawet ten futrzasty) traktowany jest
            indywidualnie. Nasz zespół to doświadczeni lekarze weterynarii, technicy weterynaryjni i
            asystenci gotowi służyć radą i pomocą 7 dni w tygodniu. Lokalizacja: ul. Zwierzyniec 12,
            00-001 Warszawa.
          </p>
        </section>
      </main>

      {/* Stopka */}
      <footer
        style={{
          backgroundColor: "#e0f2f1",
          padding: "1.5rem 1rem",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "#004d40",
        }}
      >
        <p style={{ marginBottom: "0.5rem" }}>
          © {new Date().getFullYear()} BeKaRJ Vet. Wszystkie prawa zastrzeżone.
        </p>
        <p style={{ margin: 0 }}>Kontakt: +48 123 456 789 | kontakt@bekarjvet.pl</p>
      </footer>
    </div>
  );
}

function RejestracjaPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#004d40" }}>Rejestracja na wizytę</h1>
      </header>
      <main style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Tu w przyszłości dodasz formularz */}
        <p style={{ color: "#555", fontSize: "1rem" }}>
          Formularz rejestracyjny pojawi się w kolejnym kroku.
        </p>
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
