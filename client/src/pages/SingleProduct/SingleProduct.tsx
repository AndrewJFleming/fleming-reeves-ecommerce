import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../../interfaces";

import Modal from "./Modal/Modal";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useSelector } from "react-redux";

import "./SingleProduct.css";
import BackButton from "../../components/BackButton/BackButton";

type SingleProductProps = {
  productData: ProductData[];
  favoritesIds: string[];
  cartItemIds: string[];
  userId: string;
  handleFavorite: (id: any, isFavorite: boolean) => void;
  handleAddToCart: (
    productData: {
      pId: string;
      title: string;
      price: number;
      thumbnail: string;
    },
    quantity: number
  ) => void;
};

const SingleProduct = ({
  productData,
  userId,
  favoritesIds,
  cartItemIds,
  handleFavorite,
  handleAddToCart,
}: SingleProductProps) => {
  const { productId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductData | null>(
    null
  );
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const [quantity, setQuantity] = useState(1);

  const currentUser = useSelector(
    (state: any) => state.user.authData.user
  );
  
  const updateFavoritesError = useSelector(
    (state: any) => state.user.error.message
  );

  useEffect(() => {
    const matchedProduct: ProductData = productData.filter(
      (product) => product._id === productId
    )[0];
    setCurrentProduct(matchedProduct);
  }, [productData, productId]);

  useEffect(() => {
    const id: any = currentProduct?._id;
    setIsFavorite(favoritesIds.includes(id));
  }, [currentProduct, favoritesIds]);
  useEffect(() => {
    const id: any = currentProduct?._id;
    setIsInCart(cartItemIds.includes(id));
  }, [currentProduct, cartItemIds]);

  const ToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <BackButton />
      {currentProduct ? (
        <React.Fragment>
          <Typography variant="h2">{currentProduct.title}</Typography>

          <img
            onClick={ToggleModal}
            className="product-image"
            src={currentProduct?.largeUrl}
            alt={"Preview image of" + currentProduct.title}
          />

          <p className="product-desc">{currentProduct.desc}</p>
          {showModal && (
            <div onClick={ToggleModal}>
              <Modal
                imageUrl={currentProduct.fullsizeUrl}
                title={currentProduct.title}
              />
            </div>
          )}

          {/* May want to make the currency a variable instead of hard coding it like this */}
          <h3 className="product-price">
            {"Price: $" + currentProduct?.price}{" "}
          </h3>
          {updateFavoritesError && <p>{updateFavoritesError}</p>}
          {userId && (
            <React.Fragment>
              <Button
                size="small"
                onClick={() => handleFavorite(currentProduct._id, isFavorite)}
                sx={
                  isFavorite
                    ? { color: "rgba(34, 2, 66, 0.5)" }
                    : { color: "primary.main" }
                }
              >
                <StarRateIcon />
                Favorite
              </Button>
              <Button
                size="small"
                onClick={() =>
                  handleAddToCart(
                    {
                      pId: currentProduct._id,
                      title: currentProduct.title,
                      thumbnail: currentProduct.squareThumbUrl,
                      price: currentProduct.price,
                    },
                    quantity
                  )
                }
                sx={
                  isInCart
                    ? { color: "rgba(34, 2, 66, 0.5)" }
                    : { color: "primary.main" }
                }
              >
                <ShoppingCartIcon />{" "}
                {isInCart ? (
                  <span>Added to Cart</span>
                ) : (
                  <span>Add to Cart</span>
                )}
              </Button>
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <Typography variant="h6">No Product matching that ID...</Typography>
      )}
      <BackButton />
    </Box>
  );
};

export default SingleProduct;
