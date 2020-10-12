import "./styles/main.scss";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [recipeName, setRecipeName] = useState(0);
  const [recipeSource, setRecipeSource] = useState(0);
  const [lyeConcentration, setLyeConcentration] = useState();
  const [lyeUnits, setLyeUnits] = useState("percentage");
  const [oilName, setOilName] = useState(0);
  let oilNumber = 1;

  function calculateLye(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  function test(e) {
    setLyeConcentration(e.target.value);
    ReactDOM.render(<App />, document.getElementById("app"));
    return;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="" className="our-form">
        <div>
          <label htmlFor="recipeName">Recipe Name</label>
          <input id="recipeName" type="text" />
        </div>
        <div>
          <label htmlFor="recipeSource">Created By</label>
          <input id="recipeSource" type="text" />
        </div>
        <div>Choose how to display the Lye Concentration</div>
        <div onChange={test}>
          <input type="radio" id="lyePercentage" name="lyeUnits" value="33.33%" />
          Percentage
          <input type="radio" id="lyeRatio" name="lyeUnits" value="2:1" />
          Ratio
        </div>
        <div>
          <label htmlFor="lyeConcentration">Lye Concentration</label>
          <input id="lyeConcentration" defaultValue={lyeConcentration} type="text" className="lyeConcentration" autoComplete="off" />
        </div>
        <div>
          <label htmlFor={"oilName " + oilNumber}>{"Oil " + oilNumber}</label>
          <input id={"oilName " + oilNumber} defaultValue="" type="text" className="oilName" autoComplete="off" />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
