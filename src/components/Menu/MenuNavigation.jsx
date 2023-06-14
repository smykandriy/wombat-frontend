import React from "react";
import MenuOption from "./MenuOption";
import "./Menu.scss";

const menuColumnOptions = [
  {
    firstOption: "всі інструменти",
    secondOption: "вільні інструменти",
    thirdOption: "взяті інструменти",
    editOption: "редагувати інструменти"
  },
  {
    firstOption: "категорії інструментів",
    secondOption: "журнал використання",
    thirdOption: "список робітників",
    editOption: "редагувати список роб."
  }
];

const Column = ({ firstOption, secondOption, thirdOption, editOption }) => {
  return (
    <div className="column">
      <MenuOption text={firstOption} />
      <MenuOption text={secondOption} />
      <MenuOption text={thirdOption} />
      <hr />
      <MenuOption text={editOption} />
    </div>
  );
};

const MenuNavigation = () => {
  return (
    <div className="menu-navigation">
      {menuColumnOptions.map((columnOption) => {
        const {
          firstOption,
          secondOption,
          thirdOption,
          editOption
        } = columnOption;

        return (
          <Column
            firstOption={firstOption}
            secondOption={secondOption}
            thirdOption={thirdOption}
            editOption={editOption}
          />
        );
      })}
    </div>
  );
};

export default MenuNavigation;
