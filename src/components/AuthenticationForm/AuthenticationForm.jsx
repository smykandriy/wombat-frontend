import React, { useState } from "react";
import "./AuthenticationForm.scss";
import womBaseText from "../../images/WomBaseText.png";
import NameStep from "./NameStep";
import InfoStep from "./InfoStep";
import PassStep from "./PassStep";
import AuthTypeSelector from "./AuthTypeSelector";
import RoleStep from "./RoleStep";

const Authentication = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [regStep, setRegStep] = useState("auth");
  const isRegNameStep = regStep === "name-step";
  const isRegInfoStep = regStep === "info-step";
  const isRegPassStep = regStep === "pass-step";
  const isRegRoleStep = regStep === "role-step";
  const isAuthStep = regStep === "auth";

  return (
    <div className="authenticate">
      <div className="logo">
        <div className="logo-text">
          <img src={womBaseText} alt="logo" />
        </div>
      </div>

      {isAuthStep && (
        <AuthTypeSelector setRegStep={setRegStep} setShowLogin={setShowLogin} />
      )}

      {isRegNameStep && <NameStep setRegStep={setRegStep} />}
      {isRegInfoStep && <InfoStep setRegStep={setRegStep} />}
      {isRegPassStep && <PassStep setRegStep={setRegStep} />}

      {isRegRoleStep && <RoleStep setRegStep={setRegStep} />}
    </div>
  );
};

export default Authentication;
