import React from "react";
import translator from "./translator";

function Navigation() {
  function handleChange(evt) {
    translator.translatePageTo(evt.target.value);
  }

  return (
    <nav>
      <a href="#1" data-i18n="navigation.home">
        Home
      </a>
      <a href="#2" data-i18n="navigation.categories">
        Categories
      </a>
      <a href="#3" data-i18n="navigation.about">
        About
      </a>

      <label>
        Language:
        <select onChange={handleChange}>
          <option value="en">EN</option>
          <option value="de">DE</option>
          <option value="es">ES</option>
          <option value="in">IN</option>
        </select>
      </label>
    </nav>
  );
}

export default Navigation;
