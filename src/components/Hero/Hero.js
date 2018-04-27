import React, { Component } from 'react';

class Hero extends Component {
  render() {
    const { tagline } = this.props;
    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{tagline}</h1>
            <h2 className="subtitle">Search Github Users</h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
