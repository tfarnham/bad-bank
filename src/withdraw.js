import React from 'react';
import { UserContext } from './index.js';
import Card from './context';


function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [amount, setAmount]         = React.useState('');
  const ctx = React.useContext(UserContext);  

  console.log("CTX in withdraw");
  console.log(ctx.loggedin);
  if (typeof ctx.loggedin === 'undefined'){
    console.log("Loggedin name not defined");
  }

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }

      if (label === 'amount'){
        if(isNaN(field)){
          setStatus('Error: ' + label + ' must be a number');
          setTimeout(() => setStatus(''),3000);
          return false;
        }

        if(field < 0){
          setStatus('Error: ' + label + ' must be positive');
          setTimeout(() => setStatus(''),3000);
          return false;
        }

        if(field > ctx.loggedin.balance){
        setStatus('Error: ' + label + ' cannot exceed balance');
        setTimeout(() => setStatus(''),3000);
        return false;
        }
      }


      return true;
  }

  function handleCreate(){
    console.log(amount);
    let amountFloat = parseFloat(amount);
    if (!validate(amount,     'amount')){return}
    else {
      ctx.transactions.push({user:ctx.loggedin.email,type:"withdrawl",amount:amountFloat});
      ctx.loggedin.balance = parseFloat(ctx.loggedin.balance) - amountFloat;
  
    };
  
    //ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setAmount('');
    setShow(true);
  }


  return (
    <Card
    bgcolor="primary"
    header="Withdraw"
    status={status}
    body={ !ctx.loggedin ? (
      <>
      Please login first <br />
      <a className="btn btn-light" role="button" href="#/login/">Login</a>
      </>
    ):(
      
      
      show ? (  
            <>
            Current Balance<br />
            ${ctx.loggedin.balance.toFixed(2)} <br />
            Amount<br/>
            <input type="input" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
            <button disabled = {!(amount)} type="submit" className="btn btn-light" onClick={handleCreate}>Make Withdrawal</button>
            </>
          ):(
            <>
            Current Balance<br />
            ${ctx.loggedin.balance.toFixed(2)} <br />
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
            </>
          )
  )}
  />
  )
          }

export default Withdraw;