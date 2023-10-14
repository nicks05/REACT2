import "./Calculator.css";
import { evaluate } from "mathjs";
import React, { useState } from "react";
function Calculator() {
  const [input, setInput] = useState("");
  const [res, setRes] = useState("");
  const handleClick = (value) => {
    setInput(input + value);
  };
  const calculate = () => {
    try {
      setRes(evaluate(input).toString());
    } catch (error) {
      setRes("Error");
    }
    if (input === "") {
      setRes("0");
    }
  };
  const handleBack = () => {
    setInput(input.slice(0, -1));
    if (input === "") {
      setRes("0");
    }
  };
  const calstyle = { height: "100%", width: "70%" };
  const appstyle = { width: "30%" };
  const row = { height: "25%" };
  return (
    <div class="background d-flex justify-content-center align-items-center">
      <div class="m-5">
        <div class="align-items-stretch calculator d-flex flex-column p-0 m-0">
          <div class="Display m-0 p-2">
            <div class="input">{input}</div>
            <div class="result">{res}</div>
          </div>
          <div class="d-flex Buttons m-0 p-0">
            <div class="buttonsec d-flex flex-column " style={calstyle}>
              <div class="row" style={row}>
                <button class="number col-4" onClick={() => handleClick("1")}>
                  1
                </button>
                <button class="number col-4" onClick={() => handleClick("2")}>
                  2
                </button>
                <button class="number col-4" onClick={() => handleClick("3")}>
                  3
                </button>
              </div>
              <div class="row">
                <button class="number col-4" onClick={() => handleClick("4")}>
                  4
                </button>
                <button class="number col-4" onClick={() => handleClick("5")}>
                  5
                </button>
                <button class="number col-4" onClick={() => handleClick("6")}>
                  6
                </button>
              </div>
              <div class="row">
                <button class="number col-4" onClick={() => handleClick("7")}>
                  7
                </button>
                <button class="number col-4" onClick={() => handleClick("8")}>
                  8
                </button>
                <button class="number col-4" onClick={() => handleClick("9")}>
                  9
                </button>
              </div>
              <div class="row">
                <button class="number col-4" onClick={() => handleClick("0")}>
                  0
                </button>
                <button class="number col-4" onClick={() => handleClick(".")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dot"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg>
                </button>
                <button class="number col-4" onClick={calculate}>
                  =
                </button>
              </div>
            </div>
            <div class="flex-column" style={appstyle}>
              <button class="op" onClick={handleBack}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-backspace"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                  <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                </svg>
              </button>
              <button class="op" onClick={() => handleClick("/")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-slash-lg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                  />
                </svg>
              </button>
              <button class="op" onClick={() => handleClick("*")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </button>
              <button class="op" onClick={() => handleClick("-")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-dash-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </button>
              <button class="op" onClick={() => handleClick("+")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;