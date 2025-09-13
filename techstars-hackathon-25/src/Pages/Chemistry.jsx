import React, { useState } from "react";
import "./Chemistry.css";

function Chemistry() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="chemistry-page">
      <h1 className="chemistry-title">Chemistry Study Hub</h1>
      <p className="chemistry-intro">
        A quick study resource for UNILAG Chemistry students. Explore topics,
        key formulas, and fun facts to stay ahead in class.
      </p>

      {/* Study Materials */}
      <div className="chem-section">
        <h2 onClick={() => toggleSection("study")}>📘 Study Materials</h2>
        {openSection === "study" && (
          <>
            <ul>
              <li>
                <strong>Atomic Structure:</strong> Protons, neutrons, electrons,
                quantum numbers.
              </li>
              <li>
                <strong>Periodic Table:</strong> Trends like ionization energy,
                electronegativity.
              </li>
              <li>
                <strong>Gas Laws:</strong> Boyle’s, Charles’, and Avogadro’s
                laws.
              </li>
              <li>
                <strong>Organic Chemistry:</strong> Functional groups,
                isomerism, hydrocarbons.
              </li>
              <li>
                <strong>Thermodynamics:</strong> Enthalpy, entropy, Gibbs free
                energy.
              </li>
            </ul>
            <button className="btn chem-btn">Access Full Sheet</button>
          </>
        )}
      </div>

      {/* Laws & Formulas */}
      <div className="chem-section">
        <h2 onClick={() => toggleSection("laws")}>⚖️ Laws & Formulas</h2>
        {openSection === "laws" && (
          <>
            <ul>
              <li>
                <strong>Boyle’s Law:</strong> P₁V₁ = P₂V₂
              </li>
              <li>
                <strong>Charles’ Law:</strong> V₁/T₁ = V₂/T₂
              </li>
              <li>
                <strong>Avogadro’s Law:</strong> V ∝ n
              </li>
              <li>
                <strong>Ideal Gas Equation:</strong> PV = nRT
              </li>
              <li>
                <strong>pH Formula:</strong> pH = -log[H⁺]
              </li>
            </ul>
            <button className="btn chem-btn">Access Full Sheet</button>
          </>
        )}
      </div>

      {/* Fun Facts */}
      <div className="chem-section">
        <h2 onClick={() => toggleSection("facts")}>✨ Fun Facts</h2>
        {openSection === "facts" && (
          <>
            <ul>
              <li>Water expands when it freezes.</li>
              <li>Helium was discovered in space before Earth.</li>
              <li>The only letter missing from the periodic table is “J”.</li>
              <li>The human body is ~65% oxygen by mass.</li>
            </ul>
            <button className="btn chem-btn">Access Full Sheet</button>
          </>
        )}
      </div>

      {/* Extra: Link to Drive */}
      <div className="chem-section drive-link">
        <h2>📚 Extra Materials</h2>
        <p>
          Access more detailed Chemistry study materials & textbooks here:{" "}
          <br />
          <a
            href="https://drive.google.com/drive/folders/1C5iF6BEBro9iRosHDTrB6nl_6YANfsxp?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="chem-link"
          >
            Open Google Drive Folder
          </a>
        </p>
      </div>
    </div>
  );
}

export default Chemistry;
