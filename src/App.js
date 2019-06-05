import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 20
  }
});

const App = ({ children }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h3" align="center">
              Dogwall
            </Typography>
            {children}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default App;
