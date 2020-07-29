import React, {useState} from 'react';
import LoginForm from './LoginForm';
import users from './users.json'

function Login({submit}) {
  const [loginParams, setLoginParams] = useState({
    username: "",
    password: ""
  });

  const controlLogin = (username, password) => {
    let controlPar = users.filter((user) => {
      return user.username === username && user.password === password
    }).length;
    return controlPar;
  }

  const handleChange = (event) => {
    setLoginParams({
      ...loginParams,
      [event.target.name] : event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(controlLogin(loginParams.username, loginParams.password) !== 0) {
      submit();
    } else {
      alert("Username e password non validi");
    };
  }
  return (
    <>
      <div className = "login">
        <div className = "login__card">
          <h1>Welcome!</h1>
          <p>Please sign in to start using our service</p>
          <LoginForm submit = {handleSubmit} change = {handleChange} />
        </div>
      </div>
    </>
  );
}

export default Login;
