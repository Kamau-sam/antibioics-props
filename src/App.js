import React from "react";
import Antibiotics from "./Antibiotics";
import "./style.css";

function App() {
  return (
    <div className="app-container">
      <Antibiotics
        name="Cloxacillin"
        class="Penicillin"
        moa="Inhibition of cell wall synthesis"
        isBacterialCidal={true}
      />
      <Antibiotics
        name="Streptomycin"
        class="Aminoglycoside"
        moa="Inhibition of Protein Synthesis"
        isBacterialCidal={true}
      />
      <Antibiotics
        name="Ciprofloxacin"
        class="Fluoroquinolones"
        moa="Inhibit DNA synthesis"
        isBacterialCidal={false}
      />
      <Antibiotics
        name="Azithromycin"
        class="Macrolide"
        moa="Inhibition of protein synthesis"
        isBacterialCidal={false}
      />
      <Antibiotics
        name="Meropenem"
        class="Carbapenem"
        moa="Inhibition of cell wall synthesis"
        isBacterialCidal={true}
      />
      <Antibiotics
        name="Vancomycin"
        class="Glycopeptide"
        moa="Inhibition of cell wall synthesis"
        isBacterialCidal={true}
      />
      <Antibiotics
        name="Doxycycline"
        class="Tetracycline"
        moa="Inhibition of protein synthesis"
        isBacterialCidal={false}
      />
      <Antibiotics
        name="Linezolid"
        class="Oxazolidinones"
        moa="Inhibit protein synthesis"
        isBacterialCidal={false}
      />
      <Antibiotics
        name="Trimethoprim"
        class="Sulfonamide"
        moa="Inhibition of folate synthesis"
        isBacterialCidal={false}
      />
    </div>
  );
}

export default App;
