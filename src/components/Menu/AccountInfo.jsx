import React from "react";
import MenuOptions from "./MenuOption";
import ExitIcon from "../../images/exit-icon.png";

const AccountInfo = ({ accountEmail }) => {
  return (
    <div className="account-info">
      <div className="account-wrapper">
        <MenuOptions text={accountEmail} />
        <hr />
        <div className="exit-account">
          <img src={ExitIcon} alt="exit icon" />
          <MenuOptions text="Вийти з акаунта" />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
