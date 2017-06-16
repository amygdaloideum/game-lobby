import React, { Component } from 'react';

class Login extends Component {

  constructor() {
    super();
    this.state = { input: '' }
  }

  updateInput = e => this.setState({ input: e.target.value });

  setName = () => {
    this.props.setUserName(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <input placeholder="username" value={this.state.input} onChange={this.updateInput} />
        <button onClick={this.setName}>go!</button>
      </div>
    );
  }
}

export default Login;
