import React from "react";

const StepButtons = ({ handleBackStep, handleNextStep }) => {
  return (
    <div className="buttons">
      <button onClick={handleBackStep} className="back">
        Назад
      </button>
      <button onClick={handleNextStep} className="next">
        Далі
      </button>
    </div>
  );
};

export default StepButtons;
