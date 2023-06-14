import React, { useState, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import backArrow from "../../images/back.png";
import "./Filter.scss";

const Input = ({ labelName, filterValue, filterName, setFilters }) => {
  const handleFilerSet = (event) => {
    const value = event.target.value;
    setFilters((prevFilters) => {
      prevFilters[filterName] = value;
      const newFilter = {
        ...prevFilters
      };

      return newFilter;
    });
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={filterName}>{labelName}</label>
      <input
        onChange={handleFilerSet}
        value={filterValue}
        id={filterName}
        type="text"
      />
    </div>
  );
};

const FilterButtons = ({ appliedFilters, clearFilters }) => {
  return (
    <div className="filter-buttons">
      <button onClick={clearFilters}>Очистити</button>
      <button onClick={appliedFilters}>Готово</button>
    </div>
  );
};

const Filter = ({ setShowFilter }) => {
  const filtersData = {
    name: "",
    location: "",
    description: "",
    brigade: "",
    category: ""
  };
  const [filters, setFilters] = useState(filtersData);
  const filterRef = useRef(null);

  const handleCloseModal = () => {
    setFilters(filtersData);
    setShowFilter(false);
    console.log("--- close Filter modal ---");
  };

  const showAppliedFilters = () => {
    console.log(filters);
  };

  const clearFilters = () => {
    setFilters(filtersData);
  };

  const handleApplyFilters = async () => {
    const { name, location, description, brigade, category } = filters;
    const url = `https://localhost:8000?name=${name}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(filters)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("При відправленні запиту сталася помилка.");
      }
    } catch (error) {
      console.error("Сталася помилка під час відправлення запиту:", error);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={handleCloseModal}>
      <div className="filter-modal" ref={filterRef}>
        <div className="content-wrapper">
          <div className="title">Фільтр</div>

          <Input
            labelName="Назва"
            filterValue={filters.name}
            filterName="name"
            setFilters={setFilters}
          />
          <Input
            labelName="Місцезнаходження"
            filterValue={filters.location}
            filterName="location"
            setFilters={setFilters}
          />
          <Input
            labelName="Опис"
            filterValue={filters.description}
            filterName="description"
            setFilters={setFilters}
          />
          <Input
            labelName="Бригада"
            filterValue={filters.brigade}
            filterName="brigade"
            setFilters={setFilters}
          />
          <Input
            labelName="Категорія"
            filterValue={filters.category}
            filterName="category"
            setFilters={setFilters}
          />
          <FilterButtons
            appliedFilters={handleApplyFilters}
            clearFilters={clearFilters}
          />
        </div>

        <div className="back" onClick={handleCloseModal}>
          <img src={backArrow} alt="back arrow" />
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Filter;
