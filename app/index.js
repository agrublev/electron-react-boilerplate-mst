import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { RootStore, history } from './store/rootStore';
import './app.global.css';

const store = RootStore.create();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;
function renderApp() {
  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
}

renderApp();

if (module.hot) {
  module.hot.accept(['./containers/Root'], () => {
    renderApp();
  });
  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}
