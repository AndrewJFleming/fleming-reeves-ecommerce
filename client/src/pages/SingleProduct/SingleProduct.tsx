import { useState, useEffect } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { ProductData } from "../../interfaces";

import Modal from "./Modal/Modal";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

type SingleProductProps = {
  productData: ProductData[];
  favoritesIds: string[];
  userId: string;
};

const SingleProduct = ({
  productData,
  userId,
  favoritesIds,
}: SingleProductProps) => {
  const { productId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductData | null>(
    null
  );
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  //Redux related
  const dispatch = useDispatch();
  const { updateFavorites } = bindActionCreators(actionCreators, dispatch);

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

  const handleAdd = (id: any) => {
    if (!isFavorite) {
      const updatedFavoritesIds: string[] = favoritesIds;
      updatedFavoritesIds.push(id);
      updateFavorites(userId, updatedFavoritesIds);
    } else {
      console.log("Already added to favorites");
    }
  };

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
      <Typography variant="h2">{currentProduct?.title}</Typography>

      <img
        onClick={ToggleModal}
        className="product-image"
        src={currentProduct?.largeUrl}
        alt={"Preview image of" + currentProduct?.title}
      />

      <p className="product-desc">{currentProduct?.desc}</p>
      {showModal && (
        <div onClick={ToggleModal}>
          <Modal
            imageUrl={currentProduct?.fullsizeUrl}
            title={currentProduct?.title}
          />
        </div>
      )}

      {/* May want to make the currency a variable instead of hard coding it like this */}
      <h3 className="product-price">{"Price: $" + currentProduct?.price} </h3>
      <Button
        variant="contained"
        onClick={() => handleAdd(currentProduct?._id)}
        disabled={isFavorite}
      >
        {isFavorite ? "Already Added" : "Add to Favorites"}
      </Button>
    </Box>
  );
};

export default SingleProduct;
