import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import { language, messages } from './config/intl';
import * as serviceWorker from './serviceWorker';
import store from './store';

import App from './App';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Image from './pages/Image';

import PrivateRoute from './components/PrivateRoute';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages}>
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/signup" />} />
            <Route path="/signup" component={() => <Login />} />
            <PrivateRoute exact path="/feed" component={Feed} />
            <PrivateRoute exact path="/feed/:id" component={Image} />
          </Switch>
        </App>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
