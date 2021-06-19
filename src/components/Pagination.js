import React from "react";
import PropTypes from "prop-types";
import { TablePagination } from "@material-ui/core";
import { Theme } from "../styles/globalStyles";

const Pagination = ({ pagination, mode }) => {
  const {
    productsQuantity,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = pagination;

  return (
    <>
      <TablePagination
        style={{ color: Theme[mode].colors.text }}
        labelRowsPerPage="Products per page"
        rowsPerPageOptions={[20]}
        component="div"
        count={productsQuantity}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

Pagination.propTypes = {
  productsQuantity: PropTypes.number,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
};

export default Pagination;
