import React, { useState } from "react";
import { Header } from "../Header/index.js";
import "./GeneralStructure.scss";
import { TakeTool } from "../TakeTool";
import { Filter } from "../Filter";
import { ToolTable } from "../ToolTable";
import { Menu } from "../Menu";
import { AddInstr } from "../AddInstr";

import { lastNames } from "../GeneralStructure/names";

const PEOPLE = ["Georg Pan", "Anna Pan", "Petro Petrovych"];

const GeneralStructure = function () {
  const [searchValue, setSearchValue] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showTakeTool, setShowTakeTool] = useState(false);
  const [showAddInstr, setShowAdd] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="wrapper">
      {showMenu && <Menu setShowMenu={setShowMenu} />}
      <Header
        setShowTakeTool={setShowTakeTool}
        setShowFilter={setShowFilter}
        setShowAdd={setShowAdd}
        setShowMenu={setShowMenu}
        selectedRows={selectedRows}
        onSelectRow={handleSelectRow}
      />

      <ToolTable
        selectedRows={selectedRows}
        onSelectRow={handleSelectRow}
      />

      {showTakeTool && (
        <TakeTool lastNames={lastNames} setShowTakeTool={setShowTakeTool} />
      )}

      {showFilter && <Filter setShowFilter={setShowFilter} />}
      {showAddInstr && <AddInstr setShowAdd={setShowAdd} />}
    </div>
  );
};

export default GeneralStructure;
