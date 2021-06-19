import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { FooTer } from "../styles/footer";
import Pagination from "./Pagination";

const Footer = ({ pagination, darkMode, rounded }) => {
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    pagination;

  const { products } = useSelector((state) => state.products);

  return (
    <FooTer mode={darkMode} border={rounded}>
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
    </FooTer>
  );
};

Footer.propTypes = {
  isMobile: PropTypes.bool,
};

export default Footer;
