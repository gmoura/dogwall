import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormLogin from '../components/FormLogin';
import authUser from '../actions/auth';

const Login = ({ auth, authUser }) => (
  <section>
    <h1>Login</h1>
    <FormLogin auth={auth} authUser={authUser} />
  </section>
);

const mapStateToProps = state => ({
  auth: state.auth
});

const mapActionToDispatch = dispatch =>
  bindActionCreators(
    {
      authUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapActionToDispatch
)(Login);
