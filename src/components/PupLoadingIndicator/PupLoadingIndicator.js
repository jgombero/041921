import React from "react";
import { pupURL } from "./constants/constants";
import "../../styles/pupLoadingIndicator.css";

const PupSpinner = () => {
  return(
    <div className="loading-indicator-container">
      <img alt="Pupper" src={pupURL} className="loading-indicator"></img>
    </div>
  );
};

export default PupSpinner;