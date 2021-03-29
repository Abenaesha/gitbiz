import Chart from "./Chart"

const Cards = (props) => {
  console.log(props)
  return (
    <section id="card">
      <h3 className="username">{props.user.login}</h3>
      <img src={props.user.avatar_url} alt="username"></img>
      <h4>A little about <span>{props.user.login}</span>...</h4>
      <p className="bio">{props.user.bio}</p>
      <Chart />
    </section>
  )
}

export default Cards