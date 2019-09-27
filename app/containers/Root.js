import { hot } from 'react-hot-loader/root';
// import { hot } from 'react-hot-loader';
import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../Routes';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Routes store={store} />
    </BrowserRouter>
  </Provider>
);

export default hot(Root);
// export default hot(module)(Root);
