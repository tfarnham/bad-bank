import React from 'react';
import { UserContext } from './index.js';
//import Card from './context';

// Instead of importing Card from context, we'll remake it here
// This will be a custom card to have a different width (just for this one)

function Card(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "80%"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>      
  );    
}


function AllData(){
  const ctx = React.useContext(UserContext);
    // keep this here, just in case.
    //<h5>All Data in Store</h5>
    //{JSON.stringify(ctx)}<br/>
  

  return (
    <>
    <Card
    bgcolor="light"
    header="User Accounts - It's a secret to everybody."
    txtcolor="black"
    status=''
    body={
            <>
            <table className="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
      </tr>
    </thead>
    <tbody>

      {ctx.users.map((val,key) => {
        return (
          <tr key={key}>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.password}</td>
          </tr>
        )
      })}
      
    </tbody>
  </table>
</>
}
  />
      <Card
    bgcolor="light"
    header="Transactions"
    txtcolor="black"
    status=''
    body={
      <>
      <table className="table">
<thead>
<tr>
  <th scope="col">Email</th>
  <th scope="col">Type</th>
  <th scope="col">Amount</th>
</tr>
</thead>
<tbody>
{ctx.transactions.map((val,key) => {
  return (
    <tr key={key}>
      <td>{val.user}</td>
      <td>{val.type}</td>
      <td>{val.amount}</td>
    </tr>
  )
})}

</tbody>
</table>
</>
}
  />
  </>

  );
}

export default AllData;