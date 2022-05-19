//  **********Code written by Jaleel Sayal ************
// ********** help taken from Google + youtube **********
// ********** Written on:5-13-22 **********

import React, { useState } from "react";
import classes from "./grid.module.css";
import OutputScreen from "../OutputScreen/outputScreen";
const Grid = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [answer, setAnswer] = useState("");
  const ops = ["+", "-", "/", "*", "."];
  function calculationHandler(v) {
    //This check avoids two operators side by side meaning we cannot have 2++,2** or 5// 5*/ like
    if (
      ops.includes(v) & (enteredValue === "") ||
      ops.includes(v) & ops.includes(enteredValue.slice(-1))
    ) {
      return;
    }
    setEnteredValue(enteredValue + v.toString());
  }
  function calculate() {
    // eslint-disable-next-line
    setEnteredValue(eval(enteredValue).toString());
  }
  function clear() {
    setEnteredValue("");
    setAnswer("");
  }
  return (
    <div>
      <OutputScreen answer={answer} enteredValue={enteredValue} />
      <div className={classes.operators}>
        <button onClick={() => calculationHandler("+")}>+</button>
        <button onClick={() => calculationHandler("-")}>-</button>
        <button onClick={() => calculationHandler("*")}>*</button>
        <button onClick={() => calculationHandler("/")}>/</button>
      </div>
      <div className={classes.digits}>
        <button onClick={() => calculationHandler("1")}>1</button>
        <button onClick={() => calculationHandler("2")}>2</button>
        <button onClick={() => calculationHandler("3")}>3</button>
        <button onClick={() => calculationHandler("4")}>4</button>
        <button onClick={() => calculationHandler("5")}>5</button>
        <button onClick={() => calculationHandler("6")}>6</button>
        <button onClick={() => calculationHandler("7")}>7</button>
        <button onClick={() => calculationHandler("8")}>8</button>
        <button onClick={() => calculationHandler("9")}>9</button>
        <button onClick={() => calculationHandler("0")}>0</button>
        <button onClick={() => calculationHandler(".")}>.</button>
        <button style={{ backgroundColor: "white" }} onClick={calculate}>
          =
        </button>
      </div>
      <div className={classes.equal_button} onClick={clear}>
        <button>clear</button>
      </div>
    </div>
  );
};
export default Grid;
