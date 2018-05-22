import React, { Component, Fragment } from 'react';
import Result from '../Result/Result';
import Loader from '../Loader/Loader';

import { config } from '../../config';

class User extends Component {
  state = {
    users: [],
    loading: false,
    error: null,
  };

  userRef = React.createRef();

  getUser = (e) => {
    e.preventDefault();
    const inputValue = this.userRef.current.value.toLowerCase();

    if (inputValue === '') {
      this.setState({ users: [] });
    } else {
      this.setState({ loading: true }, () => {
        fetch(
          `https://api.github.com/users/${inputValue}?client_id=${
            config.client_id
          }&client_secret=${config.client_secret}`,
        )
          .then((res) => res.json())
          .then((user) => this.setState({ users: user, loading: false }))
          .catch((err) => {
            console.log({
              error: err.statusText,
              message: err.message,
              status: err.status,
            });
          });
      });
    }

    e.target.reset();
  };

  render() {
    const { users, loading, error } = this.state;

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
          {loading ? <Loader /> : <Result user={users} />}
        </div>
      </Fragment>
    );
  }
}

export default User;
