import React from "react";
import "./menuNav.css";
import PropTypes from "prop-types";

const MenuNav = ({ categories, onCategorySelect, selectedCategory }) => {
  return (
    <div className="categories__menu">
      <ul className="categories__list">
        {categories.map((category) => (
          <li
            className="categories__list-item"
            key={category._id + 1234}
            onClick={() => onCategorySelect(category)}>
            <button
              className={
                "btn categories__list-button" +
                (selectedCategory && category._id === selectedCategory._id
                  ? "-active"
                  : "")
              }>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

MenuNav.propTypes = {
  categories: PropTypes.array.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};

export default MenuNav;
