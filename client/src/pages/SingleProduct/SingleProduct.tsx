import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../../interfaces";

import BackButton from "../../components/BackButton/BackButton";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProductImageModal from "./ProductImageModal/ProductImageModal";
import { styled } from "@mui/system";
import { Box, Button, Container, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { CartItemState } from "../../interfaces";
import { makeStyles } from "@mui/styles";

type SingleProductProps = {
  productData: ProductData[];
  favoritesIds: string[];
  cartItemIds: string[];
  userId: string;
  handleFavorite: (id: string, isFavorite: boolean) => void;
  handleAddToCart: (productData: CartItemState) => void;
};

const useStyles = makeStyles((theme: any) => {
  return {
    productContentWrapper: {
      marginBottom: "2rem",
    },
    singleProductImage: {
      display: "block",
      width: "40vw",
      maxWidth: "650px",
      margin: "0 auto 1rem",
      "&:hover": {
        cursor: "pointer",
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    othersWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      pl: 1,
      pb: 1,
    },
  };
});

const SingleProduct = ({
  productData,
  userId,
  favoritesIds,
  cartItemIds,
  handleFavorite,
  handleAddToCart,
}: SingleProductProps) => {
  const { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState<ProductData | null>(
    null
  );
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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

  const StyledImg = styled("img")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {},
  }));

  const classes = useStyles();

  return (
    <Container>
      <BackButton />
      {currentProduct ? (
        <Box component="div" className={classes.productContentWrapper}>
          <PageTitle title={currentProduct.title} />
          <StyledImg
            onClick={handleOpen}
            className={classes.singleProductImage}
            src={currentProduct?.largeUrl}
            alt={"Preview image of" + currentProduct.title}
          />
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            {currentProduct.desc}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
            <em>Product Id: {currentProduct._id}</em>
          </Typography>
          {userId && (
            <Box component="div" className={classes.othersWrapper}>
              <Typography variant="h5">
                {"Price: $" + currentProduct?.price}
              </Typography>
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
                  handleAddToCart({
                    pId: currentProduct._id,
                    title: currentProduct.title,
                    thumbnail: currentProduct.squareThumbUrl,
                    price: currentProduct.price,
                    quantity: 1,
                  })
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
            </Box>
          )}
          <ProductImageModal
            fullsizeUrl={currentProduct?.fullsizeUrl}
            title={currentProduct.title}
            isOpen={isOpen}
            handleClose={handleClose}
          />
        </Box>
      ) : (
        <Typography variant="h6">No Product matching that ID...</Typography>
      )}
      <BackButton />
    </Container>
  );
};

export default SingleProduct;
