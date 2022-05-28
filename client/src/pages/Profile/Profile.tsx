import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, updateUser } from "../../redux/features/users";

import {
  Button,
  Box,
  Container,
  InputLabel,
  Input,
  FormGroup,
  Typography,
  Paper,
} from "@mui/material";
import PageTitle from "../../components/PageTitle/PageTitle";
import BackButton from "../../components/BackButton/BackButton";

type Props = {
  userId: string;
};

const Profile = ({ userId }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [deleteFormData, setDeleteFormData] = useState({
    username: "",
    password: "",
  });

  const [updateFormData, setUpdateFormData] = useState({
    email: "",
    username: "",
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleUserDelete = () => {
    console.log(deleteFormData);
    dispatch(deleteUser({ userId, deleteFormData, navigate }));
    handleClearDeleteForm();
  };

  const handleUserUpdate = () => {
    console.log(updateFormData);
    dispatch(updateUser({ userId, updateFormData, navigate }));
    handleClearUpdateForm();
  };

  const handleChangeDeleteForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeleteFormData({
      ...deleteFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeUpdateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateFormData({
      ...updateFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearDeleteForm = () => {
    setDeleteFormData({
      username: "",
      password: "",
    });
  };

  const handleClearUpdateForm = () => {
    setUpdateFormData({
      email: "",
      username: "",
      currentPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
    });
  };

  return (
    <Container>
      <BackButton />
      <PageTitle title="Account Settings" />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <Paper
          sx={{
            width: "70%",
            minWidth: "325px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ marginTop: "35px" }}>
            Delete Account
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: "45px" }}>
            Please confirm account details first:
          </Typography>
          <FormGroup
            sx={{
              width: "65%",
              minWidth: "245px",
              marginBottom: "55px",
            }}
          >
            <InputLabel htmlFor="username-delete">Username</InputLabel>
            <Input
              id="username-delete"
              name="username"
              onChange={handleChangeDeleteForm}
              value={deleteFormData.username}
            />
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              name="password"
              onChange={handleChangeDeleteForm}
              value={deleteFormData.password}
            />
            <Button onClick={handleUserDelete}>Delete</Button>
          </FormGroup>

          <Typography variant="h6" sx={{ marginTop: "35px" }}>
            Update Account
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: "45px" }}>
            Please confirm account details first:
          </Typography>
          <FormGroup
            sx={{
              width: "65%",
              minWidth: "245px",
              marginBottom: "100px",
            }}
          >
            <InputLabel htmlFor="username">Email</InputLabel>
            <Input
              id="email"
              name="email"
              onChange={handleChangeUpdateForm}
              value={updateFormData.email}
            />

            <InputLabel htmlFor="username-update">Username</InputLabel>
            <Input
              id="username-update"
              name="username"
              onChange={handleChangeUpdateForm}
              value={updateFormData.username}
            />
            <InputLabel htmlFor="currentPassword">Current Password</InputLabel>
            <Input
              id="currentPassword"
              type="password"
              name="currentPassword"
              onChange={handleChangeUpdateForm}
              value={updateFormData.currentPassword}
            />
            <InputLabel htmlFor="newPassword">New Password</InputLabel>
            <Input
              id="newPassword"
              type="password"
              name="newPassword"
              onChange={handleChangeUpdateForm}
              value={updateFormData.newPassword}
            />
            <InputLabel htmlFor="newPasswordConfirm">
              Confirm New Password
            </InputLabel>
            <Input
              id="newPasswordConfirm"
              type="password"
              name="newPasswordConfirm"
              onChange={handleChangeUpdateForm}
              value={updateFormData.newPasswordConfirm}
            />
            <Button type="submit" onClick={handleUserUpdate}>
              Update
            </Button>
          </FormGroup>
        </Paper>
      </Box>
    </Container>
  );
};

export default Profile;
