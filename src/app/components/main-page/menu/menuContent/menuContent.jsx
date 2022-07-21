import React from "react";
import "./menuContent.css";
import Pagination from "../../../ui/pagination/pagination";

const MenuContent = ({
  userCrop,
  countOfProducts,
  pageSize,
  currentPage,
  handlePageChange,
}) => {
  return (
    <div className="container-fluid products__container">
      <div className="row">
        {userCrop.map((product) => (
          <div
            className="col-sm-6 col-lg-4 col-xl-3 product__card"
            key={product._id}>
            <div className="product__inner">
              <div className="product__img-container">
                <img className="product__img" src={product.image} alt="img" />
              </div>

              <div className="product__header">
                <h5>{product.name}</h5>
                <h5>{product.price + " грн"}</h5>
              </div>

              <div className="product__about">
                <span>{product.ingredients.map((item) => item + ", ")}</span>
                <span className="product__weight">{product.weight}</span>
              </div>

              <div className="product__buttons">
                <div className="product__buttons-amount">
                  <button className="product__buttons-amount_btn">-</button>
                  <span className="product__buttons-amount_number">1</span>
                  <button className="product__buttons-amount_btn">+</button>
                </div>
                <button className="product__buttons-order">Замовити</button>
              </div>
            </div>
          </div>
        ))}
        <Pagination
          itemsCount={countOfProducts}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MenuContent;
