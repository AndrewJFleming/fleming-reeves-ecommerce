import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@mui/material';
// import styled from "@emotion/styled";

import './TopNav.css';

interface Props {
  user: boolean;
}

export const TopNav: FC<Props> = ({ user }) => {
  return (
    <header>
      <Container className="header-container">
        <nav id="left-nav">
          <Link to="/" className="header-logo nav-item">
            Fleming Reeves Ecommerce
          </Link>
        </nav>
        <nav id="center-left-nav">
          <Link className="nav-item" to="/about">
            About
          </Link>
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
        </nav>
        <nav id="center-right-nav">
          {user && <span id="user-avatar">A</span>}
          <Link className="nav-item" to="/cart">
            <span id="header-cart-link-item">
              <i className="fas fa-shopping-cart" />
              &nbsp;(0)
            </span>
          </Link>
        </nav>
        <nav id="right-nav">
          {user
            ? <span className="nav-item auth-link" onClick={() => {}}>
                Logout
              </span>
            : <React.Fragment>
                <Link className="nav-item auth-link" to="/login">
                  Login
                </Link>
                <Link className="nav-item auth-link" to="/register">
                  Register
                </Link>
              </React.Fragment>}
        </nav>
      </Container>
    </header>
  );
};
