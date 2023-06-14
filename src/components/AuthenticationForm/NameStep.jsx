import React from "react";
import BasicStep from "./BasicStep";

const NameStep = ({ setRegStep }) => {
  const handleNextStep = () => {
    setRegStep("info-step");
  };
  const handleBackStep = () => {
    setRegStep("auth");
  };

  return (
    <BasicStep
      handleBackStep={handleBackStep}
      handleNextStep={handleNextStep}
      firstPlaceholder="Імʼя"
      secondPlaceholder="Прізвище"
    />
  );
};

export default NameStep;
