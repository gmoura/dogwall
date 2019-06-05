import React, { useState } from 'react';

const Form = ({ authUser }) => {
  const [email, setEmail] = useState('');
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        authUser(email);
      }}
    >
      <input
        type="text"
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Form;
