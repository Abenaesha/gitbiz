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
    users: []
  };
  addUser = (username) => {
    fetch(`${GITHUB_API}${username}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        this.setState((currentState) => {
          const tmpUsers = [...currentState.users, data];
          return { users: tmpUsers };
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
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Username addUser={this.addUser} handleChange={this.handleChange} />
        <Cardlist users={this.state.users} />
      </div>
    );
  }
}

export default App;

/*

login
id
avatar_url
html_url
repos_url
location
twitter_username
email
hireable
followers_url
blog
bio
name
company

https://api.github.com/users/galambborong/repos

-- language

https://api.github.com/repos/galambborong/dotfiles/commits

-- length


*/
