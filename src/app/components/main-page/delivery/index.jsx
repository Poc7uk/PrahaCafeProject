import React from "react";
import "./delivery.css";
import deliverytImage from "../../../assets/images/bike2.png";
import bikeIcon from "../../../assets/images/svg/bike-1.js";

export const Delivery = () => {
  return (
    <div className="container-fluid delivery__container">
      <div className="delivery__block">
        <div className="delivery__image-block">
          <img
            className="delivery__img"
            src={deliverytImage}
            alt="Delivery Image"
          />
        </div>
        <div className="delivey__info-block">
          <div className="delivey__info-inner">
            <h1 className="delivery__header">Доставка і оплата</h1>
            <div className="delivery__h-divider">
              <div className="divider__shadow"></div>
            </div>
            <span className="delivery__text-block">
              <div className="delivery__icon">{bikeIcon}</div>
              <p className="delivery__info">
                Ви маєте можливість{" "}
                <b> замовити свої улюблені страви з кафе «Praha» </b> і бути
                впевненими в тому, що ми привеземо все найсмачніше прямо до вас!
              </p>
            </span>
            <span className="delivery__text-block">
              <div className="delivery__icon">{bikeIcon}</div>
              <p className="delivery__info">
                <b>Доставка по місту Ходорів</b> здійснюється до 20хв + час
                приготування страви, який вам повідомлять при оформленні
                замовлення <br />
                <i> Тариф - 30 грн</i>
              </p>
            </span>
            <span className="delivery__text-block">
              <div className="delivery__icon">{bikeIcon}</div>
              <p className="delivery__info">
                <b>Доставка у найближчі села: Жирова, Вовчатичі, Отиневичі</b> -
                здійснюється до 35хв + час приготування страви, який вам
                повідомлять при оформленні замовлення <br />
                <i> Тариф - 45 грн</i>
              </p>
            </span>
            <span className="delivery__text-block">
              <div className="delivery__icon">{bikeIcon}</div>
              <p className="delivery__info">
                <b>Години доставки: 10:00-21:00</b>
              </p>
            </span>
            <span
              className="delivery__text-block"
              style={{ marginTop: "10px" }}>
              <div className="delivery__icon">{bikeIcon}</div>
              <p className="delivery__info">
                При <b>замовленні через сайт</b> - ми до вас зателефонуємо для
                підтвердження замовлення
              </p>
            </span>

            <p className="delivery__info"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
