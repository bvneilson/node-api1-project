import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const NewUserForm = styled.form`
  width: 50%;
  margin: 0 auto;
`
const NewUserInput = styled.input`
  width: 50%;
  margin: 0 auto;
  display: block;
`
const NewUserLabel = styled.label`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  display: block;
`
const SubmitButton = styled.button`
  background-color: #c8c8c8;
  padding: 7px 15px;
  max-width: 200px;
  display: block;
  margin: 0 auto;
`

const NewUser = props => {
  const [newUser, setNewUser] = useState({
    name: '',
    bio: ''
  })

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/users', newUser).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    })
  }

  return (
    <NewUserForm>
      <NewUserLabel htmlFor="name">Name</NewUserLabel>
      <NewUserInput type="text" name="name" onChange={handleChange} value={newUser.name}></NewUserInput>
      <NewUserLabel htmlFor="bio">Bio</NewUserLabel>
      <NewUserInput type="text" name="bio" onChange={handleChange} value={newUser.bio}></NewUserInput>
      <SubmitButton onClick={handleSubmit}>Create New User</SubmitButton>
    </NewUserForm>
  )
}

export default NewUser;
