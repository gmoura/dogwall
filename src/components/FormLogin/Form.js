import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  },
  form: {
    padding: 20,
    margin: 20
  },
  input: {
    marginBottom: 15
  }
});

const Form = ({ authUser }) => {
  const [email, setEmail] = useState('');
  const classes = useStyles();

  return (
    <Paper className={classes.form}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={event => {
          event.preventDefault();
          authUser(email);
        }}
      >
        <TextField
          id="email"
          label="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          margin="normal"
          fullWidth
          className={classes.input}
        />

        <Button variant="contained" color="primary" type="submit">
          <FormattedMessage id="signup" />
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
