import React from "react";
import "./App.css";
import Grid from "./Components/UI/Grid/grid";

function App(props) {   
  return (
    <div className="App">
      <div className="calculator">           
        <Grid />
      </div>
    </div>
  );
}

export default App;
