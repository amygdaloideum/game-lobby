import React, { Component } from 'react';
import logo from './logo.svg';
import io from 'socket.io-client';
import './App.css';

import Login from './components/login';
import UserList from './components/userlist';
import GameList from './components/gamelist';

const gameContainerStyle = {
  display: 'flex',
};

class App extends Component {

  constructor() {
    super();
    const socket = io('http://localhost:8099');
    this.state = {
      userName: null,
      socket,
      users: [],
      games: [],
    };

    socket.on('USERS_UPDATE', users => {
      this.setState({ users });
    });

    socket.on('GAMES_UPDATE', games => {
      this.setState({ games });
    });

    socket.on('INVITATION', user => {
      alert(`You recieved an invitation from ${user.name}`);
    });
  }

  updateUserName = userName => {
    this.setState({ userName })
    this.state.socket.emit('SET_USERNAME', userName);
  };

  createGame = () => {
    this.state.socket.emit('CREATE_GAME');
  }

  inviteUser = user => this.state.socket.emit('SEND_INVITE', user);

  render() {
    const { userName } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{!userName ? 'Login' : `welcome ${userName}`}</h2>
        </div>
        {!userName && <Login setUserName={this.updateUserName} />}
        <div style={gameContainerStyle}>
          <UserList userList={this.state.users} userName={userName} inviteUser={this.inviteUser} />
          <GameList gameList={this.state.games} createGame={this.createGame} />
        </div>
      </div>
    );
  }
}

export default App;
