import React, { useState } from "react";
import "./AddInstr.scss";

const Input = ({ labelName, AddValue, AddName, setAdds }) => {
  const handleFilerSet = (event) => {
    const value = event.target.value;
    setAdds((prevAdds) => {
      prevAdds[AddName] = value;
      const newAdd = {
        ...prevAdds
      };

      return newAdd;
    });
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={AddName}>{labelName}</label>
      <input
        onChange={handleFilerSet}
        value={AddValue}
        id={AddName}
        type="text"
      />
    </div>
  );
};

const handleClose = () => {
  setSearchValue("");
  setSearchResult([]);
  setShowAdd(false);
};

const AddButtons = ({ appliedAdds, handleClose }) => {
  return (
    <div className="buttons">
      <button onClick={handleClose}>Скасувати</button>
      <button onClick={appliedAdds}>Зберегти</button>
    </div>
  );
};

const Add = ({ setShowAdd }) => {
  const AddsData = {
    id: "",
    name: "",
    location: "",
    category: "",
    description: "",
    brigade: ""
  };
  const [Adds, setAdds] = useState(AddsData);

  const handleCloseModal = () => {
    setAdds(AddsData);
    setShowAdd(false);
    console.log("--- close Add modal ---");
  };

  const showAppliedAdds = () => {
    console.log(Adds);
  };

  const handleApplyAdds = async () => {
    const response = await fetch('https://localhost:3000//endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Adds)
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="add-modal">
      <div className="content-wrapper">
        <div className="header">
          <div className="title">Додати інструмент</div>
          <AddButtons
            appliedAdds={showAppliedAdds}
            handleClose={handleCloseModal}
          />
        </div>

        <div className="row">
          <Input
            labelName="ID*"
            AddValue={Adds.id}
            AddName="id"
            setAdds={setAdds}
          />
          <Input
            labelName="Категорія"
            AddValue={Adds.category}
            AddName="category"
            setAdds={setAdds}
          />
        </div>
        <div className="row">
          <Input
            labelName="Назва"
            AddValue={Adds.name}
            AddName="name"
            setAdds={setAdds}
          />
          <Input
            labelName="Опис"
            AddValue={Adds.description}
            AddName="description"
            setAdds={setAdds}
          />
        </div>
        <div className="row">
          <Input
            labelName="Місцезнаходження"
            AddValue={Adds.location}
            AddName="location"
            setAdds={setAdds}
          />
          <Input
            labelName="Бригада"
            AddValue={Adds.brigade}
            AddName="brigade"
            setAdds={setAdds}
          />
        </div>
      </div>
    </div>
  );
};

export default Add;
