import React from 'react';
import Calculator from "./Calculator.jsx"
import './App.css';

function App() {
  const OuterBox = {
    width: "100vw",
    height: "80vh",
    padding: "5pt",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"space-arround",
    flexWrap: "wrap",
    border: "2pt solid black",
    //border: "2pt solid #f04115"
  };
  return (
    <div style={OuterBox}> 
    <Calculator />
    </div>
  );
}

export default App;
