import React from "react";
import "./menuNav.css";
import PropTypes from "prop-types";

const MenuNav = ({ categories }) => {
  return (
    <div className="categories__menu">
      <ul className="categories__list">
        {categories.map((category) => (
          <li className="categories__list-item" key={category._id}>
            <button className="btn categories__list-button">
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
};

export default MenuNav;
