import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function signup() {
  
  const [sta, setSta] = useState(null);
  console.log('signup');
  return (
    <div>
      <TextField
        id="username"
        label="Username"
        // type="password"
        // autoComplete="current-password"
      />
      <p></p>
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
        type="Password"
        // type="password"
        // autoComplete="current-password"
      />
      <p></p>
      {<Button 
        variant="contained" 
        onClick={submitSignUp}
      >
        Sign Up
      </Button>}
    </div>
  );
}

async function submitSignUp() {
  const body = {};
  body.username = document.querySelector('#username').value;
  body.email = document.querySelector('#email').value;
  body.password = document.querySelector('#password').value;
  console.log(body);

}


