import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import { language, messages } from './config/intl';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages}>
      <Router>
        <main>
          <Route path="/" component={App} />
        </main>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
