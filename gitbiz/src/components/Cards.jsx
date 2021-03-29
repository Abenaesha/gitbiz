import Chart from "./Chart"

const Cards = (props) => {
  console.log(props)
  return (
    <section>
      <h3>{props.user.login}</h3>
      <img src={props.user.avatar_url} alt="username"></img>
      <h4>A little about {props.user.login}...</h4>
      <p>{props.user.bio}</p>
      <Chart />
    </section>
  )
}

export default Cards