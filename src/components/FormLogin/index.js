import React from 'react';
import { Redirect } from 'react-router-dom';
import Form from './Form';

const FormLogin = ({ auth, authUser }) => (
  <>
    {Object.keys(auth).length > 0 ? (
      <Redirect to="/feed" />
    ) : (
      <Form authUser={authUser} />
    )}
  </>
);

export default FormLogin;
