import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button } from '@mui/material';
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';

type Props = {};

const BackButton = (props: Props) => {
  return (
    <Box
      sx={{
        alignSelf: 'flex-start',
        justifySelf: 'flex-start',
        margin: '35px 0'
      }}
    >
      <Link to="/">
        <Button
          sx={{
            '&:hover': {
              color: '#C44343'
            }
          }}
        >
          <ArrowBackIosIcon />
          Back To Products
        </Button>
      </Link>
    </Box>
  );
};

export default BackButton;
