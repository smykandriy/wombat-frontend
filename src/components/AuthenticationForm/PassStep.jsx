import React from "react";
import BasicStep from "./BasicStep";

const PassStep = ({ setRegStep }) => {
  const handleNextStep = () => {
    setRegStep("role-step");
  };
  const handleBackStep = () => {
    setRegStep("info-step");
  };

  return (
    <BasicStep
      handleBackStep={handleBackStep}
      handleNextStep={handleNextStep}
      firstPlaceholder="Пароль"
      secondPlaceholder="Повторити пароль"
    />
  );
};

export default PassStep;
