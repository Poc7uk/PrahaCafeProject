import React from "react";
import "./banner.css";

export const Banner = () => {
  return (
    <div className="container banner__container">
      <div className="banner">
        <div className="banner__inner">
          <h1 className="banner__text-big1">Доставка Їжі у Ходорові</h1>
          <p className="banner__text-small">Прага дарує знижки</p>
          <h1 className="banner__text-big2">
            Знижка -10% на <br /> самовивіз
          </h1>
          <button className="banner__btn">Деталі</button>
        </div>
      </div>
    </div>
  );
};
