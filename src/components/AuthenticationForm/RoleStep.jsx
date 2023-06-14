import React from "react";
import StepButtons from "./StepButtons";

const RoleStep = ({ setRegStep, submitAuth, formData }) => {
  const handleNextStep = () => {
    submitAuth(formData);
  };
  const handleBackStep = () => {
    setRegStep("pass-step");
  };

  return (
    <div className="reg-step">
      <StepButtons
        handleBackStep={handleBackStep}
        handleNextStep={handleNextStep}
      />
    </div>
  );
};

export default RoleStep;
