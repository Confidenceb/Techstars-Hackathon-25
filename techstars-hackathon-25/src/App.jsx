// src/App.jsx
import "./App.css";
import Navbar from "./Components/NavBar.jsx";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <main>
        <h1>Techstars Hackathon Project 🚀</h1>
      </main>
      <footer className="footer">
        <p>© 2025 Team ChemHack | Techstars UNILAG</p>
      </footer>
    </div>
  );
}

export default App;
