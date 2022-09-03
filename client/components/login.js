import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function login() {
  
  const [sta, setSta] = useState(null);
  console.log('login');
  return (
    <div>
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