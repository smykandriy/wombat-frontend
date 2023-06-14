import React from "react";
import StepButtons from "./StepButtons";

const BasicStep = ({
  handleBackStep,
  handleNextStep,
  firstPlaceholder,
  secondPlaceholder
}) => {
  return (
    <div className="reg-step">
      <div className="input-wrapper">
        <label for="frist-field">{firstPlaceholder}</label>
        <input id="frist-field" type="text" placeholder={firstPlaceholder} />
      </div>
      <div className="input-wrapper">
        <label for="second-field">{secondPlaceholder}</label>
        <input id="second-field" type="text" placeholder={secondPlaceholder} />
      </div>
      <StepButtons
        handleBackStep={handleBackStep}
        handleNextStep={handleNextStep}
      />
    </div>
  );
};

export default BasicStep;
