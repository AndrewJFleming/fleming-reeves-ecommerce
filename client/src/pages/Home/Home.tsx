import React, { useState, useEffect } from "react";

import { Container, Box, Pagination, Stack } from "@mui/material";
import Products from "../../components/Products/Products";
import SearchBar from "../../components/SearchBar/SearchBar";

import { CartItemState, ProductData } from "../../interfaces";

import "./Home.css";

type HomeProps = {
  productData: ProductData[];
  favoritesIds: string[];
  cartItemIds: string[];
  handleFavorite: (id: string, isFavorite: boolean) => void;
  handleAddToCart: (productData: CartItemState) => void;
};

const Home = ({
  productData,
  handleFavorite,
  favoritesIds,
  cartItemIds,
  handleAddToCart,
}: HomeProps) => {
  const [productsArray, setProductsArray] = useState(productData);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    setProductsArray(productData);
  }, [productData]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handlePageNumberChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;

    if (
      parseInt(value) * currentPage > productsArray.length &&
      currentPage > 1
    ) {
      setCurrentPage(1);
    }
    setProductsPerPage(parseInt(value));
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const numberOfPages = Math.ceil(productsArray.length / productsPerPage);
  const currentProducts = productsArray.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const filteredProducts = productsArray.filter(
    (product) => product.title == searchString
  );

  return (
    <Container maxWidth={false}>
      <Box>
        <SearchBar placeholder={"Search by title"} data={productsArray} />
      </Box>
      <Products
        productsArray={currentProducts}
        favoritesIds={favoritesIds}
        cartItemIds={cartItemIds}
        handleFavorite={handleFavorite}
        handleAddToCart={handleAddToCart}
      />
      <Stack
        className="pagination"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "55px",
        }}
      >
        <Pagination
          count={numberOfPages}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
        />
        <label
          className="pagination-dropdown_label"
          htmlFor="products-per-page"
        >
          Items per page:
        </label>
        <select
          onChange={handlePageNumberChange}
          className="pagination-dropdown_menu"
          name="products-per-page"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </Stack>
    </Container>
  );
};

export default Home;
