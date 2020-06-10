import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Signup from './Sign-up';


class App extends Component {
  render() {
    return (
      <div class="App">
        <nav>
          <Nav />
        </nav>

        <main>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/sign-up" component={Signup} />
        </main>

        <footer>
          {/* <Footer /> */}
        </footer>

      </div>
    )
  }
}

export default App;