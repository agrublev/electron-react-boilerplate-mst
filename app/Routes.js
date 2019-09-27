import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import { observer, inject } from 'mobx-react';

class Routes extends Component {
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    console.info('--- INFO WHICH STORE', this.props);
    return (
      <App>
        <Switch>
          <Route path={routes.COUNTER} component={CounterPage} />
          <Route path={routes.HOME} component={HomePage} />
        </Switch>
      </App>
    );
  }
}

export default inject('store')(observer(Routes));
