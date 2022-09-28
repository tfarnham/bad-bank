import React from 'react';
import { UserContext } from './index.js';
import Card from './context';

function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [toggle, setToggle]     = React.useState(true);
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label + ' cannot be blank');
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      return true;
  }

  function handleLogin(){
    console.log("Attempting to login");
    console.log(email,password);
    console.log(ctx);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;

    let loginOK = false;
    ctx.users.forEach(checkUser => {
      //console.log("emails: ", email, "|", checkUser.email);
      //console.log("passwords: ", password, "|", checkUser.password);
      if (email === checkUser.email && password === checkUser.password){
        //console.log("You're in!!");
        loginOK = true;
        ctx.loggedin = {name:checkUser.name, email:checkUser.email, password:checkUser.password, balance:checkUser.balance};
        //console.log("Logged in info")
        //console.log(ctx.loggedin);
        return;
      }
    })

      if (loginOK){
        console.log("Login was okay");
        setShow(false);

      }
      else {
        console.log("Login failed");
        setStatus('Error: invalid username and password');
        setTimeout(() => setStatus(''),5000);
        console.log("Imposter");
      }
    
    
  }    

  function clearForm(){
    setEmail('');
    setPassword('');
    // log out the user by deleting their information
    delete ctx.loggedin;
    setShow(true);
    setToggle(!toggle);
  }

if(!ctx.loggedin){

  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={show ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
              </>
            ):(
              <>
              <h5>Welcome back, {ctx.loggedin.name}!</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Not {ctx.loggedin.name}? Log out</button>
              </>
            )}
    />
  )
            } // end of if logged in
  else{
    // If already logged in, show a logout card
    return (
    <Card
      bgcolor="primary"
      header="Logout"
      status={status}
      body={
              <>
              <h5>Welcome back, {ctx.loggedin.name}!</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Not {ctx.loggedin.name}? Log out</button>
              </>
            }
    />
    )

  }
}

export default Login;