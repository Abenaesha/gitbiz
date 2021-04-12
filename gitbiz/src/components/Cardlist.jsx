import Cards from "./Cards"

const Cardlist = ({users}) => {
  return (
    <main className="cardlist">
      {users.map((user) => {
        return <Cards key={user.id} user={user}/>
      })}
    </main>
  )
}

export default Cardlist;
