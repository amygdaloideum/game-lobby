import React from 'react';

const style = { width: '300px'}

const UserList = ({ userList = [], userName, inviteUser }) => (
  <div style={style}>
    <h3>Users online</h3>
    <ul> 
    { userList.map( (user, i) => (
      <li key={i}>{user.name}
        { user.name !== userName && <button onClick={() => inviteUser(user)}>invite</button> }
      </li>
      ))}
    </ul>
  </div>
);

export default UserList;