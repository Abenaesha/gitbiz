import React from 'react';
class Username extends React.Component {
  state = {
    inputUsername: ''
  }

  handleChange = ({ target }) => {
    this.setState({ inputUsername: target.value });
  };

  render() {
    console.log(this.state)
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.addUser(this.state.inputUsername)
        this.setState({ inputUsername: '' })
      }}>
        <label htmlFor="username">Enter your GitHub username:</label>
        <input type="text" id="username" placeholder="GitHub username" onChange={this.handleChange}/>
        <button type="submit">Add your GitHub profile</button>
      </form>
    )
  }
}

export default Username;