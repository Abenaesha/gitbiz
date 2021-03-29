const Username = (props) => {
  return (
    <form onSubmit={props.addUser}>
      <label htmlFor="username">Enter your GitHub username:</label>
      <input type="text" id="username" placeholder="GitHub username" onChange={props.handleChange}/>
      <button type="submit">Add your GitHub profile</button>
    </form>
  )
}

export default Username