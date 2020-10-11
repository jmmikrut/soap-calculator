import "./styles/main.scss";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  let fred = 1;

  function calculateLye(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  function handleSubmit(e) {
    e.preventDefault();

    answerField.current.focus();

    let correctAnswer;
  }

  return (
    <>
      <form onSubmit={handleSubmit} action="" className="our-form">
        <label htmlFor="oilName">Oil {fred}</label>
        <input id={"oilName " + fred} defaultValue="" type="text" className="oilName" autoComplete="off" />
        <button>Submit</button>
      </form>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
