import React, { useState } from "react";
import "./ToolTable.scss";

const data = [
  {
    name: "Person 1",
    id: 1,
    location: "Tool location 1",
    brigade: "Brigade1",
    description: "122",
    date: "05.04.2023",
    time: "09:00"
  },
  {
    name: "Person 2",
    id: 2,
    location: "Tool location 2",
    brigade: "Brigade1",
    description: "Nothing",
    date: "04.11.2023",
    time: "19:30"
  },
  {
    name: "Person 3",
    id: 3,
    location: "Tool location 3",
    brigade: "Brigade1",
    description: "tool description",
    date: "04.11.2023",
    time: "13:30"
  }
];

const Row = ({ name, id, description, location, brigade, date, time, selected, onSelect }) => {
  const rowClass = selected ? "row selected" : "row";

  return (
    <div className={rowClass} onClick={onSelect}>
      <div className="row-cell name">{name}</div>
      <div className="row-cell id">{id}</div>
      <div className="row-cell description">{description}</div>
      <div className="row-cell location">{location}</div>
      <div className="row-cell brigade">{brigade}</div>
      <div className="row-cell date">{date}</div>
      <div className="row-cell time">{time}</div>
    </div>
  );
};

const ToolList = ({ toolsToShow, selectedRows, onSelectRow }) => {
  const renderedTools = toolsToShow.map((tool) => {
    const { id } = tool;
    const isSelected = selectedRows.includes(id);

    return (
      <Row
        key={id}
        {...tool}
        selected={isSelected}
        onSelect={() => onSelectRow(id)}
      />
    );
  });

  return renderedTools;
};

const ToolListHeader = ({ showButtons, onCancelSelected }) => {
  return (
    <div className="tool-list-header">
      <div className="tool-list-header-cell name">Назва</div>
      <div className="tool-list-header-cell id">Id</div>
      <div className="tool-list-header-cell description">Опис</div>
      <div className="tool-list-header-cell location">Місцезнаходження</div>
      <div className="tool-list-header-cell brigade">Бригада</div>
      <div className="tool-list-header-cell date">Дата</div>
      <div className="tool-list-header-cell time">Час</div>
      {showButtons && (
        <div className="tool-list-header-cell action-buttons">
          <button>Взяти</button>
          <button onClick={onCancelSelected}>Скасувати</button>
        </div>
      )}
    </div>
  );
};

const ToolTable = () => {
  const [toolsToShow, setToolsToShow] = useState(data);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleCancelSelected = () => {
    setSelectedRows([]);
  };

  const showButtons = selectedRows.length > 0;

  return (
    <div className="tool-list-table">
      <ToolListHeader
        showButtons={showButtons}
        onCancelSelected={handleCancelSelected}
      />

      <ToolList
        toolsToShow={toolsToShow}
        selectedRows={selectedRows}
        onSelectRow={handleSelectRow}
      />
    </div>
  );
};

export default ToolTable;
