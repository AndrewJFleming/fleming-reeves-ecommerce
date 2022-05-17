import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, updateUser } from '../../redux/features/users';

import {
  Button,
  Container,
  FormControl,
  InputLabel,
  Input,
  FormGroup
} from '@mui/material';

type Props = {
  userId: string;
};

const Profile = ({ userId }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [deleteFormData, setDeleteFormData] = useState({
    username: '',
    password: ''
  });

  const [updateFormData, setUpdateFormData] = useState({
    email: '',
    username: '',
    currentPassword: '',
    newPassword: '',
    newPasswordConfirm: ''
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

  const handleChange = (e: any) => {
    setDeleteFormData({
      ...deleteFormData,
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  const handleChangeUpdateForm = (e: any) => {
    setUpdateFormData({
      ...updateFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleClearDeleteForm = () => {
    setDeleteFormData({
      username: '',
      password: ''
    });
  };

  const handleClearUpdateForm = () => {
    setUpdateFormData({
      email: '',
      username: '',
      currentPassword: '',
      newPassword: '',
      newPasswordConfirm: ''
    });
  };

  return (
    <Container>
      <FormGroup>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          name="username"
          onChange={handleChange}
          value={deleteFormData.username}
        />
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={deleteFormData.password}
        />
        <Button onClick={handleUserDelete}>Delete</Button>
      </FormGroup>
      <FormGroup>
        <InputLabel htmlFor="username">Email</InputLabel>
        <Input
          id="email"
          name="email"
          onChange={handleChangeUpdateForm}
          value={updateFormData.email}
        />

        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          name="username"
          onChange={handleChangeUpdateForm}
          value={updateFormData.username}
        />
        <InputLabel htmlFor="currentPassword">
          Current Password
        </InputLabel>
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
    </Container>
  );
};

export default Profile;
