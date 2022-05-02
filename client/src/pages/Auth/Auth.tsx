import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Paper, TextField, Button } from "@mui/material";

import { makeStyles } from "@mui/styles";

interface Props {
  title: string;
}

const authStyles = makeStyles({
  authPage: {
    position: "relative",
    height: "calc(100vh - 60px)",
  },
  authForm: {
    padding: 20,
    width: 280,
    margin: "0 auto",
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -55%)",
  },
});

export const Auth: FC<Props> = ({ title }) => {
  const navigate = useNavigate();

  const handleAuthenticate = (e: any) => {
    e.preventDefault();
    navigate("/");
  };

  const classes = authStyles();
  return (
    <div className={classes.authPage}>
      <Paper elevation={10} className={classes.authForm}>
        <Typography variant="h5" align="center">
          {title}
        </Typography>
        <TextField
          label="Username"
          placeholder="Enter username"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          margin="normal"
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ margin: "1rem 0" }}
          fullWidth
          onClick={handleAuthenticate}
        >
          {title}
        </Button>
        <Typography>
          {title === "Login" ? (
            <Typography>
              Not yet registered? <Link to="/register">Register</Link>
            </Typography>
          ) : (
            <Typography>
              Already registered? <Link to="/login">Login</Link>
            </Typography>
          )}
        </Typography>
      </Paper>
    </div>
  );
};
