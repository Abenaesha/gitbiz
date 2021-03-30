import React from 'react';
import './App.css';
import Cardlist from './components/Cardlist';
import Header from './components/Header';
import Username from './components/Username';

const Abdalraof = 'Abenaesha';
const Peter = 'galambborong';
const GITHUB_API = 'https://api.github.com/users/';

class App extends React.Component {
  state = {
    users: [],
    isLoaded: false
  };
  addUser = (username) => {
    fetch(`${GITHUB_API}${username}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState((currentState) => {
          const tmpUsers = [...currentState.users, data];
          return { users: tmpUsers, isLoaded: true};
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.addUser(Peter);
    this.addUser(Abdalraof);
  }

  render() {
    const {isLoaded} = this.state;
    // return isLoaded ? <Cardlist users={this.state.users} />
    // : <p>Your biz is important to us...! Please hold</p>
    return (
      <div className="App">
        <Header />
        <Username addUser={this.addUser} handleChange={this.handleChange} />
        {isLoaded ? <Cardlist users={this.state.users} /> : <p>Your biz is important to us...! Please hold</p>}
      </div>
    );
  }
}

export default App;
