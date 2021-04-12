import Chart from './Chart';

const Cards = ({ user }) => {
  const {
    login,
    avatar_url,
    bio,
    location,
    hireable,
    company,
    twitter_username,
    followers,
    blog,
    repos_url
  } = user;
  const proDetails = [location, hireable, company];
  const isPro = proDetails.some((detail) => {
    return detail !== null;
  });
  const socDetails = [twitter_username, followers, blog];
  const isSoc = socDetails.some((detail) => {
    return detail !== null;
  });

  return (
    <section className="card">
      <h3 className="username">{login}</h3>
      <img src={avatar_url} alt="username"></img>
      <p className="bio">{bio}</p>
      <div id="profesh">
        {isPro && (
          <h4>
            Professional <span>INFO</span>{' '}
          </h4>
        )}
        <ul className="pro-list">
          {location && (
            <li>
              <i className="fas fa-map-marked-alt"></i>
              {location}
            </li>
          )}
          {hireable && (
            <li>
              <i className="fas fa-laptop-code"></i>Looking for work
            </li>
          )}
          {company && (
            <li>
              <i class="fas fa-building"></i>
              {company}
            </li>
          )}
        </ul>
      </div>
      <div id="social">
        {isSoc && (
          <h4>
            Social <span>INFO</span>{' '}
          </h4>
        )}
        <ul className="social-list">
          {twitter_username && (
            <li>
              <i className="fab fa-twitter"></i>
              <a href={`https://www.twitter.com/${twitter_username}`}>
                @{twitter_username}
              </a>
            </li>
          )}
          {blog && (
            <li>
              <i className="fas fa-blog"></i>
              <a href={blog}>Personal Website</a>
            </li>
          )}
          {followers && (
            <li>
              <i className="fab fa-github"></i>
              {followers} followers on Github
            </li>
          )}
        </ul>
      </div>
      <Chart repos_url={repos_url} />
    </section>
  );
};

export default Cards;
