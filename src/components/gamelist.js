import React, { Component } from 'react';

const style = { width: '300px'}
const ulStyle = {minHeight: '150px'}

const UserList = ({ gameList = [], createGame }) => (
  <div style={style}>
    <h3>Games</h3>
    <ul style={ulStyle}> 
    { gameList.map( (game, i) => (<li key={i}>Game by {game.creator.name}</li>))}
    </ul>
    <button onClick={createGame}>Create game</button>
  </div>
);

export default UserList;