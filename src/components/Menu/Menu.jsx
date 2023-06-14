import React from "react";
import MenuNavigation from "./MenuNavigation";
import AccountInfo from "./AccountInfo";
import OutsideClickHandler from "react-outside-click-handler";
import "./Menu.scss";

const Menu = ({ setShowMenu }) => {
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={closeMenu}>
      <div className="menu">
        <MenuNavigation />
        <AccountInfo accountEmail="akoval@pridebud.com.ua" />
      </div>
    </OutsideClickHandler>
  );
};

export default Menu;
