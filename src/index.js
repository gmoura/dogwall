import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import { language, messages } from './config/intl';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
    <Router>
      <main>
        <Route path="/" component={App} />
      </main>
    </Router>
  </IntlProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();
