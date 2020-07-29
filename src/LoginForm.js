import React from 'react';

function LoginForm({submit, change}) {
  return (
    <form onSubmit = {submit} className = "login__form">
      <label>
        Username: 
      </label>
      <input type="text" name = "username" onChange= {change} />
      <label>
        Password: 
      </label>
      <input type="password" name = "password" onChange= {change} />
      <div className = "d-flex justify-content-around">
        <button type = "submit" value="Submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
