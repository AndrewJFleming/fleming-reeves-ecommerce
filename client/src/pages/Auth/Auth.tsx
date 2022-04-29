import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Paper, Grid, TextField, Button } from "@mui/material";

import "./Auth.css";

interface Props {
  title: string;
}

export const Auth: FC<Props> = ({ title }) => {
  const navigate = useNavigate();

  const handleAuthenticate = (e: any) => {
    e.preventDefault();
    navigate("/");
  };

  const paperStyle = {
    padding: 20,
    width: 280,
    margin: "0 auto",
  };
  const btnstyle = { margin: "1rem 0" };
  const textFieldStyle = { margin: "1rem 0" };

  return (
    <div className="auth-page">
      <Paper elevation={10} style={paperStyle} className="auth-form">
        <Grid textAlign="center">
          <h2 className="auth-form-title">{title}</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          style={textFieldStyle}
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleAuthenticate}
        >
          {title}
        </Button>
        <Typography>
          {title === "Login" ? (
            <React.Fragment>
              Not yet registered? <Link to="/register">Register</Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              Already registered? <Link to="/login">Login</Link>
            </React.Fragment>
          )}
        </Typography>
      </Paper>
    </div>
  );
};
