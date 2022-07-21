import React, { useState, useEffect } from "react";
import { paginate } from "../../utils/paginate";
import useApi from "../../../hooks/useApi";
import { categoriesArray, products } from "../../../constants/forApi";
import MenuNav from "./menuNav/menuNav";
import Loader from "../../loader/loader";
import MenuContent from "./menuContent/menuContent";

export const Menu = () => {
  const [apiCategories, apiLoadingCategories] = useApi(categoriesArray);
  const [apiProducts, apiLoadingProducts] = useApi(products);

  // for Pagination and Filtration
  const [selectedCategory, setSelectedCategory] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const filteredCategories =
    selectedCategory && selectedCategory._id
      ? apiProducts.filter(
          (product) => product.category._id === selectedCategory._id
        )
      : apiProducts;
  const countOfProducts = filteredCategories.length;
  const userCrop = paginate(filteredCategories, currentPage, pageSize);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // for Pagination and Filtration end

  return (
    <>
      {apiLoadingCategories && apiLoadingProducts ? (
        <Loader />
      ) : (
        <div className="container-fluid menu__container">
          <MenuNav
            categories={apiCategories}
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
          <MenuContent
            userCrop={userCrop}
            countOfProducts={countOfProducts}
            pageSize={pageSize}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
};
