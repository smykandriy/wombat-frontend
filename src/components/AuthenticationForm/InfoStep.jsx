import React from "react";
import BasicStep from "./BasicStep";

const InfoStep = ({ setRegStep }) => {
  const handleNextStep = () => {
    setRegStep("pass-step");
  };
  const handleBackStep = () => {
    setRegStep("name-step");
  };

  return (
    <BasicStep
      handleBackStep={handleBackStep}
      handleNextStep={handleNextStep}
      firstPlaceholder="Номер телефону"
      secondPlaceholder="E-mail"
    />
  );
};

export default InfoStep;
