import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormLogin from '../components/FormLogin';
import authUser from '../actions/auth';

const Login = ({ auth, authUser }) => (
  <FormLogin auth={auth} authUser={authUser} />
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
