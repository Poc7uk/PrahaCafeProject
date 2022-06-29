import React from "react";
import MenuNav from "./menuNav/menuNav";
import "./menu.css";
import useApi from "../../../hooks/useApi";
import { categoriesArray } from "../../../constants/forApi";

export const Menu = () => {
  const [apiData, , apiLoading] = useApi(categoriesArray);
  // const [apiDataP, apiErrorP, apiLoadingP] = useApi(products);

  return (
    <>
      {apiLoading ? (
        <div className="loader">
          <span className="loader__inner">
            <i className="bi bi-hourglass-split"></i>
          </span>
        </div>
      ) : (
        <div className="container-fluid menu__container">
          <MenuNav categories={apiData} />
        </div>
      )}
    </>
  );
};
