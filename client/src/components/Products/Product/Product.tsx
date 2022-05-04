import React, { Component } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';

interface ProductProps {
  imageId: string;
  imageUrl: string;
  title: string;
  desc: string;
  price: number;
}

const useStyles = makeStyles({
  productLink: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none'
    }
  }
});

const Product = ({
  imageId,
  imageUrl,
  title,
  desc,
  price
}: ProductProps) => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link
        to={'/products/' + imageId}
        className={classes.productLink}
      >
        <CardMedia
          component="img"
          height="240"
          image={imageUrl}
          alt={'A preview of ' + title}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {desc.length <= 119 ? desc : `${desc.substring(0, 120)}...`}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            justifySelf: 'center',
            alignSelf: 'center',
            textAlign: 'center',
            margin: '20px 0px 30px 0px'
          }}
        >
          {'Price:  $' + price}
        </Typography>
        <CardActions>
          <Button size="small">
            <StarRateIcon />Favorite
          </Button>
          <Button size="small">
            <ShoppingCartIcon /> Add to Cart
          </Button>
        </CardActions>
      </CardContent>
    </Card>

    // <div className="product-card">
    //   <img
    //     className="product-card_image"
    //     src={imageUrl}
    //     alt="Thumbnail image of the artwork being sold"
    //   />
    //   <h2 className="product-card_title">
    //     {title}
    //   </h2>
    //   <h3 className="product-card_desc">
    //     {desc.length <= 99 ? desc : `${desc.substring(0, 100)}...`}
    //   </h3>
    // </div>
  );
};

export default Product;
