import Chart from "./Chart"

const Cards = ({user}) => {
  const {login, id, avatar_url, bio, location, hireable, company, twitter_username, followers, blog} = user;
  const proDetails = [location, hireable, company]
  const isPro = proDetails.some(detail => {
    return detail !== null;
  })
  const socDetails = [twitter_username, followers, blog];
  const isSoc= socDetails.some(detail => {
    return detail !== null;
  })

  return (
    <section id="card">
      <h3 className="username">{login}</h3>
      <img src={avatar_url} alt="username"></img>

      {/* <h4>A little about <span>{props.user.login}</span>...</h4> */}
      <p className="bio">{bio}</p>
      <div id="profesh"> 
        {isPro && <h4>Pofessional INFO</h4>}
        <ul>
          {location && <li>{location}</li>}
          {hireable && <li>Looking for work</li>}
          {company && <li>{company}</li>}       
        </ul>
      </div>
      <div id="social">
        {isSoc && <h4>Social INFO</h4>}
      <ul>
        {twitter_username && <li><a href={`www.twitter.com/${twitter_username}`}>@{twitter_username}</a></li>}
        {followers && <li>{followers} followers on Github</li>}
        {blog && <li><a href={blog}>Personal Website</a></li>}
      </ul>
      </div>
      
      <Chart />
    </section>
  )
}

export default Cards;

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