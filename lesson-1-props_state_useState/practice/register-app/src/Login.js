import React from 'react';

function LoginForm(){
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const submitForm = (e) => {
    e.preventDefault();
    console.log(password,email);
  };
  
  return (
    <div>
      <form className="login">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input type ="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor ="password">Password</label>
        <input type ="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" value= 'submit' onClick={submitForm} />
      </form>
    </div>
    )
  
}

export default LoginForm;