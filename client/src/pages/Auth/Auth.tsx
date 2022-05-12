import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/features/users";

import { Typography, Paper, TextField, Button } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { SwitchAuthPage } from "./SwitchAuthPage/SwitchAuthPage";

interface Props {
  title: string;
  altPath: string;
}

const useStyles = makeStyles({
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

export const Auth: FC<Props> = ({ title, altPath }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuth = (e: any) => {
    e.preventDefault();
    if (title === "Login") {
      console.log("login");
      //Remove email prop from formData obj
      const { email, ...loginFormData } = formData;

      //createAsyncThunk callback is expecting all props within it's first arg
      //so we pass our props in an obj and access using Dot property accessor.
      dispatch(login({ loginFormData, navigate }));
    } else {
      dispatch(register({ formData, navigate }));
    }
  };

  const handleChange = (e: any) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleClearForm = (e: any) => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  const classes = useStyles();
  return (
    <div className={classes.authPage}>
      <Paper elevation={10} className={classes.authForm}>
        <Typography variant="h5" align="center">
          {title}
        </Typography>
        <TextField
          sx={{ backgroundColor: "common.white" }}
          label="Username"
          placeholder="Enter username"
          value={formData.username}
          name="username"
          margin="normal"
          fullWidth
          required
          onChange={handleChange}
        />
        {title === "Register" && (
          <TextField
            sx={{ backgroundColor: "common.white" }}
            label="Email"
            placeholder="Enter email"
            value={formData.email}
            name="email"
            type="email"
            margin="normal"
            fullWidth
            required
            onChange={handleChange}
          />
        )}
        <TextField
          sx={{ backgroundColor: "common.white" }}
          label="Password"
          placeholder="Enter password"
          value={formData.password}
          name="password"
          margin="normal"
          type="password"
          fullWidth
          required
          onChange={handleChange}
        />
        <Button
          color="warning"
          variant="contained"
          sx={{ margin: "1rem 0" }}
          fullWidth
          onClick={handleAuth}
        >
          {title}
        </Button>
        <Typography>
          {title === "Login" ? (
            <SwitchAuthPage
              prompt="Not yet registered? "
              title={title}
              altPath={altPath}
              handleClearForm={handleClearForm}
            />
          ) : (
            <SwitchAuthPage
              prompt="Already registered? "
              title={title}
              altPath={altPath}
              handleClearForm={handleClearForm}
            />
          )}
        </Typography>
      </Paper>
    </div>
  );
};
