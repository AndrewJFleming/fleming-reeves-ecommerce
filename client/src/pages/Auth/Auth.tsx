import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/features/users";

import {
  Typography,
  Paper,
  TextField,
  Button,
  Container,
  Box,
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { SwitchAuthPage } from "./SwitchAuthPage/SwitchAuthPage";
import BackButton from "../../components/BackButton/BackButton";

interface Props {
  title: string;
  altPath: string;
  altAuthPage: string;
}

const useStyles = makeStyles({
  authPage: {
    position: "relative",
    height: "calc(100vh - 65px)",
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

export const Auth: FC<Props> = ({ title, altPath, altAuthPage }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "Login") {
      //Remove email prop from formData obj
      const { email, ...loginFormData } = formData;
      //createAsyncThunk callback is expecting all props within it's first arg
      //so we pass our props in an obj and access using Dot property accessor.
      dispatch(login({ loginFormData, navigate }));
    } else {
      dispatch(register({ formData, navigate }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleClearForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  const classes = useStyles();
  return (
    <Container>
      <BackButton />
      <Box component="div" className={classes.authPage}>
        <Paper elevation={10} className={classes.authForm}>
          <form onSubmit={handleAuth}>
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
              autoFocus
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
                autoFocus
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
              type="submit"
            >
              {title}
            </Button>
            {title === "Login" ? (
              <SwitchAuthPage
                prompt="Not yet registered? "
                title={altAuthPage}
                altPath={altPath}
                handleClearForm={handleClearForm}
              />
            ) : (
              <SwitchAuthPage
                prompt="Already registered? "
                title={altAuthPage}
                altPath={altPath}
                handleClearForm={handleClearForm}
              />
            )}
          </form>
        </Paper>
      </Box>
    </Container>
  );
};
