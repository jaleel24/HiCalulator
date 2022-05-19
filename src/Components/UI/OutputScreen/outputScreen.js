import React from "react";
import classes from './outputScreen.module.css';
import AppTitle from '../appTitle.js';
const OutputScreen = ({answer,enteredValue}) =>{
    return(
        <div className={classes.display}>
            <AppTitle />
            {/* if there is an answer only then show other wise stay empty */}
            {answer ? (
              <span>
                <sup>({answer})</sup>
              </span>
            ) : (
              ""
            )}
            {enteredValue || "0"}            
        </div>
    );
}
export default OutputScreen ;