export const filterProducts = (products, page, rowsPerPage) => {
  return products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
};
