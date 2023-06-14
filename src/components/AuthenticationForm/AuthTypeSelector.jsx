import React from "react";
import toolBox from "../../images/tool-box.png";

const AuthTypeSelector = ({ setRegStep, setShowLogin }) => {
  const handleShowRegistration = () => {
    setRegStep("name-step");
  };
  const handleShowLogin = () => {
    setShowLogin(true);
  };

  return (
    <>
      <div className="form">
        <div className="form-title">
          Автоматизуйте облік складу Вашої компанії
        </div>
        <div className="form-buttons">
          <button onClick={handleShowRegistration} className="registration">
            Реєстрація
          </button>
          <button onClick={handleShowLogin} className="login">
            Вхід
          </button>
        </div>
      </div>
      <img className="tool-box-image" src={toolBox} alt="tool box" />
    </>
  );
};

export default AuthTypeSelector;
