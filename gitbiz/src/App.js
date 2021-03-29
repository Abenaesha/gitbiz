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
  };
  addUser = (username) => {
    // this.prevent.default()
    fetch(`${GITHUB_API}${username}`)
      .then((res) => {
        console.log(res)
        return res.json();
      })
      .then((data) => {
        this.setState((currentState) => {
          const tmpUsers = [...currentState.users, data];
          return { users: tmpUsers, inputUsername: '' };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    fetch(`${GITHUB_API}${Peter}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState((currentState) => {
          console.log(currentState, '<<<');
          const tmpUsers = [...currentState.users, data];
          console.log(tmpUsers, 'tmpUsers');
          return { users: tmpUsers };
        });
      });
    fetch(`${GITHUB_API}${Abdalraof}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState((currentState) => {
          console.log(currentState, '<<<');
          const tmpUsers = [...currentState.users, data];
          console.log(tmpUsers, 'tmpUsers');
          return { users: tmpUsers };
        });
      });
  }

  render() {
    console.log(this.state.inputUsername);
    return (
      <div className="App">
        <Header />
        <Username addUser={this.addUser} handleChange={this.handleChange} />
        <Cardlist />
      </div>
    );
  }
}

export default App;
