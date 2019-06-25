import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy(() => import('./containers/Posts')); // a new feature from React 16.6, for lazy loading(as the name suggests);

class App extends Component {

  state = {
    show: false
  }

  modeHandler = () => {
    this.setState(prevState => {
      return { show: !prevState.show }
    });
  }

  render() {
    return (

      // another example showing asynch rendering, using a toggle button
      <React.Fragment>
        <button onClick={this.modeHandler}>Toggle Mode</button>
        {
          this.state.show ? (
            <Suspense fallback={<div>Loading...</div>}>
              <Posts />
            </Suspense>
          ) : <User />
        }
      </React.Fragment>

      /*
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route path="/user" component={User} />

          //The asynchronous route content is then written like in the following 
          <Route path="/posts"
            render={() =>
              <Suspense fallback={<div>Loading...</div>}>
                <Posts />
              </Suspense>
            } />

        </React.Fragment>
      </BrowserRouter>
      */
    );
  }
}

export default App;
