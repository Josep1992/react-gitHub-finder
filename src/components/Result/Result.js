import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
  static propTypes = {
    user: PropTypes.shape({
      login: PropTypes.string.isRequired,
      bio: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  };

  checkForImage = () => {
    const image = this.props.user.avatar_url;
    if (image) {
      return <img src={image} alt="Avatar" />;
    }
  };

  render() {
    const {
      bio,
      location,
      login,
      followers,
      following,
      public_repos,
      image,
      html_url,
      created_at,
    } = this.props.user;

    return (
      <div className="container">
        <h1>Username: {login}</h1>
        <h2>Location: {location}</h2>
        {this.checkForImage()}
        <h2>{bio}</h2>
        <ul>
          <li>Followers: {followers}</li>
          <li>Following: {following}</li>
          <li>Repos: {public_repos}</li>
          <li>
            Github Profile:{' '}
            <a href={html_url} target="_blank">
              {' '}
              Here
            </a>
          </li>
          <li>Joined: {created_at}</li>
        </ul>
      </div>
    );
  }
}

export default Result;
