import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserCard from './UserCard.js';

const UserRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 80%;
  margin: 0 auto;
  padding: 40px 0;
`

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users').then(res => {
      console.log(res);
      setUsers(res.data);
    }).catch(err => {
      console.error(err);
    })
  }, [])

  if (!users) {
    return <h2>Loading...</h2>
  }

  return (
    <UserRow>
      {users.map(user => {
        return (
          <UserCard user={user} key={user.id} />
        )
      })}
    </UserRow>
  )
}

export default UserList;
