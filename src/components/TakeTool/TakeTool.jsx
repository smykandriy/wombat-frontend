import React, { useState } from "react";
import "./TakeTool.scss";
import OutsideClickHandler from "react-outside-click-handler";

const SearchResult = ({ nameList }) => {
  console.log(nameList);

  const Name = ({ name }) => {
    return <p className="result-name">{name}</p>;
  };

  return (
    <div className="result-modal">
      {nameList.map((name, i) => (
        <Name key={i} name={name} />
      ))}
    </div>
  );
};

const TakeTool = ({ setShowTakeTool, lastNames }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    const regex = new RegExp(value, "i");
    const matchingNames = lastNames.filter((name) => regex.test(name));

    console.log("MATCH", matchingNames);
    setSearchResult(matchingNames);
  };

  const handleClose = () => {
    setSearchValue("");
    setSearchResult([]);
    setShowTakeTool(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleClose}>
      <div className="take-tool-modal">
        <h2>Взяти інструмент</h2>
        <input
          onChange={handleSearch}
          className="search"
          placeholder="Пошук..."
          type="text"
        />
        <div className="buttons">
          <button onClick={handleClose}>Скасувати</button>
          <button>Взяти</button>
        </div>

        {searchResult.length > 0 && <SearchResult nameList={searchResult} />}
      </div>
    </OutsideClickHandler>
  );
};

export default TakeTool;
