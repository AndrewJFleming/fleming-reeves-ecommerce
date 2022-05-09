import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductData } from "../../interfaces";

import Modal from "./Modal/Modal";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

import "./SingleProduct.css";

type SingleProductProps = {
  productData: ProductData[];
  favoritesIds: string[];
  userId: string;
  handleFavorite: any;
};

const SingleProduct = ({
  productData,
  userId,
  favoritesIds,
  handleFavorite,
}: SingleProductProps) => {
  const { productId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductData | null>(
    null
  );
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  //Redux related
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { updateFavorites } = bindActionCreators(actionCreators, dispatch);

  const updateFavoritesError = useSelector(
    (state: any) => state.userReducer.error
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
      {updateFavoritesError && <p>{updateFavoritesError}</p>}
      <Button
        size="small"
        onClick={() => handleFavorite(currentProduct?._id, isFavorite)}
        sx={
          isFavorite
            ? { color: "rgba(34, 2, 66, 0.5)" }
            : { color: "primary.main" }
        }
      >
        <StarRateIcon />
        Favorite
      </Button>
    </Box>
  );
};

export default SingleProduct;
