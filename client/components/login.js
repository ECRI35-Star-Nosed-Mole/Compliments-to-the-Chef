import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './modal.css';

export default function login(props) {
  
  // const [sta, setSta] = useState(null);
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';
  console.log('login');
  return (
    <div className={showHideClassName}>
      <TextField
        id="email"
        label="E-mail"
        // type="password"
        // autoComplete="current-password"
      />
      <p></p>
      <TextField
        id="password"
        label="Password"
        type="password"
      // autoComplete="current-password"
      />
      <p></p>
      <Button variant="contained" onClick={submitLogin}>Submit</Button>
    </div>
  );
}

async function submitLogin() {
  const body = {};
  body.email = document.querySelector('#email').value;
  body.password = document.querySelector('#password').value;
  console.log(body);
  const auth = await fetch('/internal/user', {
    method: 'POST',
    headers: {'Content-Type': 'Application/JSON'},
    body: JSON.stringify(body)
  });
  
}