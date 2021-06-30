import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Board, { CardsWrapper } from "../styles/dashboard";
import ProductCard from "./ProductCard";
import { fetchAllProducts } from "../api/products";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../store/products/products.actions";
import { filterProducts } from "../utils/pagination";
import Pagination from "./Pagination";

const Dashboard = (props) => {
  const { pagination, darkMode, rounded } = props;
  const { handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } =
    pagination;
  const { products: storeProducts } = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const filteredProducts = useMemo(
    () => filterProducts(products, page, rowsPerPage),
    // eslint-disable-next-line
    [page, products]
  );

  useEffect(() => {
    fetchAllProducts()
      .then(({ data }) => {
        dispatch(setAllProducts(data));
        if (data.length) {
          setProducts(data);
        } else {
          setProducts(storeProducts);
        }
      })
      .catch((err) => {
        throw err;
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Helmet>
        <title>Products List</title>
      </Helmet>
      <Board mode={darkMode} rounded={rounded}>
        <Pagination
          mode={darkMode}
          pagination={{
            productsQuantity: products?.length,
            handleChangePage,
            handleChangeRowsPerPage,
            page,
            rowsPerPage,
          }}
        />
        <CardsWrapper>
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                productData={product}
                key={product.id}
                darkMode={darkMode}
                rounded={rounded}
              />
            );
          })}
        </CardsWrapper>
      </Board>
    </>
  );
};

Dashboard.propTypes = {
  props: PropTypes.shape({
    pagination: PropTypes.shape({
      page: PropTypes.number,
      rowsPerPage: PropTypes.number,
      handleChangePage: PropTypes.func,
      handleChangeRowsPerPage: PropTypes.func,
    }),
  }),
};

export default Dashboard;
