import React, { Component, Fragment } from 'react';
import Hero from '../Hero/Hero';
import User from '../User/User';
import Footer from '../Footer/Footer';
import '../../App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container is-fluid">
          <Hero tagline="Github Finder" />
          <User />
          <br />
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
