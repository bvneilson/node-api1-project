import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const User = styled.div`
  width: 30%;
  margin: 0 1.5%;
  border: 1px solid #c8c8c8;
  border-radius: 7px;
  padding: 20px 0;
`
const UserHeader = styled.h2``
const UserBio = styled.p`
  font-size: 14px;
`
const UserButton = styled.button`
  background-color: #c8c8c8;
  padding: 7px 15px;
  max-width: 200px;
`

const UserCard = props => {

  const deleteUser = () => {
    axios.delete(`http://localhost:8000/api/users/${props.user.id}`).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  }

  if (!props.user) {
    return <h2>Loading...</h2>
  }

  return (
    <User>
      <UserHeader>{props.user.name}</UserHeader>
      <UserBio>{props.user.bio}</UserBio>
      <UserButton onClick={deleteUser}>Delete User</UserButton>
    </User>
  )
}

export default UserCard;
