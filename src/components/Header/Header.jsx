import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import menu from "../../images/menu.png";
import filter from "../../images/filter.png";
import select from "../../images/select.png";
import search from "../../images/search.png";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({
  setShowTakeTool,
  setShowFilter,
  setShowMenu,
  setShowAdd,
  selectedRows,
  onSelectRow
}) => {
  const handleShowTool = () => {
    setShowTakeTool(true);
  };

  const handleShowFilter = () => {
    setShowFilter(true);
  };

  const handleShowAdd = () => {
    setShowAdd(true);
  };

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleShowSelect = () => {
    onSelectRow();
  };

  const [showActionButtons, setShowActionButtons] = useState(false);

  useEffect(() => {
    setShowActionButtons(selectedRows && selectedRows.length > 0);
  }, [selectedRows]);  

  return (
    <header className="header">
      <div className="nav">
        <div className="left-part">
        <img
            className="header-menu"
            onClick={handleShowMenu}
            src={menu}
            alt="header menu"
          />
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <Link to="/authenticate">
          <div className="avatar-logo"> </div>
        </Link>
      </div>

      <div className="tool-manager">
        <div className="search-wrapper">
          <input className="search" type="text" id="search" />
          <label htmlFor="search">
            <img src={search} alt="search" />
          </label>
        </div>
        <img
          className="filter"
          onClick={handleShowFilter}
          src={filter}
          alt="filter"
        />
        <img
          className="select"
          onClick={handleShowSelect}
          src={select}
          alt="select"
        />
        {showActionButtons && (
          <div className="action-buttons">
            <button className="take" onClick={handleShowTool}>
              Взяти
            </button>
            <button className="cancel">Скасувати</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
