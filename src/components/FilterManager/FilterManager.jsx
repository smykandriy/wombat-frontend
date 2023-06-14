import React, { useState } from "react";
import backArrow from "../../images/back.png";
import "./FilterMan.scss";

const Input = ({ labelName, FilterManValue, FilterManName, setFilterMans }) => {
  const handleFilerSet = (event) => {
    const value = event.target.value;
    setFilterMans((prevFilterMans) => {
      prevFilterMans[FilterManName] = value;
      const newFilterMan = {
        ...prevFilterMans
      };

      return newFilterMan;
    });
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={FilterManName}>{labelName}</label>
      <input
        onChange={handleFilerSet}
        value={FilterManValue}
        id={FilterManName}
        type="text"
      />
    </div>
  );
};

const FilterManButtons = ({ appliedFilterMans }) => {
  return (
    <div className="FilterMan-buttons">
      <button>Очистити</button>
      <button onClick={appliedFilterMans}>Готово</button>
    </div>
  );
};

const FilterMan = ({ setShowFilterMan }) => {
  const FilterMansData = {
    name_instr: "",
    name_worker: "",
    status: "",
    date: "",
    who_write: ""
  };
  const [FilterMans, setFilterMans] = useState(FilterMansData);

  const handleCloseModal = () => {
    setFilterMans(FilterMansData);
    setShowFilterMan(false);
    console.log("--- close FilterMan modal ---");
  };

  const showAppliedFilterMans = () => {
    console.log(FilterMans);
  };

  return (
    <div className="FilterMan-modal">
      <div className="content-wrapper">
        <div className="title">Фільтр</div>

        <Input
          labelName="Назва інструменту"
          FilterManValue={FilterMans.name_instr}
          FilterManName="name-instr"
          setFilterMans={setFilterMans}
        />
        <Input
          labelName="Ім'я робітника"
          FilterManValue={FilterMans.name_worker}
          FilterManName="name-worker"
          setFilterMans={setFilterMans}
        />
        <Input
          labelName="Статус"
          FilterManValue={FilterMans.status}
          FilterManName="status"
          setFilterMans={setFilterMans}
        />
        <Input
          labelName="Дата"
          FilterManValue={FilterMans.date}
          FilterManName="date"
          setFilterManMans={setFilterMans}
        />
        <Input
          labelName="Хто відзначив?"
          FilterManValue={FilterMans.who_write}
          FilterManName="who-write"
          setFilterManMans={setFilterMans}
        />

        <FilterManButtons appliedFilterMans={showAppliedFilterMans} />
      </div>

      <div className="back" onClick={handleCloseModal}>
        <img src={backArrow} alt="back arrow" />
      </div>
    </div>
  );
};

export default FilterMan;
