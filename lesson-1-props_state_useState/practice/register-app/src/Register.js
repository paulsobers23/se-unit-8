import React from 'react';

function Register(){
  const [fullname,setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const submitForm = (e) => {
    e.preventDefault();
    console.log(fullname,email,password);
  };
  
  return (
    <form className="register">
    <h1>Register</h1>
    <label htmlFor ="name">Name</label>
    <input type ="text" value={fullname} onChange={(e) => setFullName(e.target.value)} />
    <label htmlFor ="email">Email</label>
    <input type ="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <label htmlFor ="name">Password</label>
    <input type ="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <input type="submit" value= 'submit' onClick={submitForm} />
    
    </form>
    );
}

export default Register;