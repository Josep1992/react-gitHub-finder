import React, { Component, Fragment } from 'react';
import Result from '../Result/Result';

import { config } from '../../config';

class User extends Component {
  state = {
    users: [],
  };

  userRef = React.createRef();

  getUser = (e) => {
    e.preventDefault();
    const inputValue = this.userRef.current.value.toLowerCase();

    if (inputValue === '') {
      this.setState({ users: [] });
    } else {
      fetch(
        `https://api.github.com/users/${inputValue}?client_id=${
          config.client_id
        }&client_secret=${config.client_secret}`,
      )
        .then((res) => res.json())
        .then((user) => this.setState({ users: user }))
        .catch((error) => {
          console.log(error);
        });
    }

    e.target.reset();
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.getUser}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                ref={this.userRef}
                className="input is-rounded is-medium"
                placeholder="Who are you looking for?"
              />
            </div>
          </div>
          <button className="button is-danger is-large">
            <span className="icon">
              <i className="fa fa-search" />
            </span>
            <span>Find a User</span>
          </button>
        </form>
        <div className="container">
          <Result user={this.state.users} />
        </div>
      </Fragment>
    );
  }
}

export default User;
