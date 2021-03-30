import Cards from "./Cards"

const Cardlist = ({users}) => {
  return (
    <main id="cardlist">
      {users.map((user) => {
        return <Cards key={user.id} user={user}/>
      })}
    </main>
  )
}

export default Cardlist;
