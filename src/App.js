import React from 'react';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';

const App = () => (
  <Grid container justify="center">
    <FormattedMessage id="hello.world" />
  </Grid>
);

export default App;
