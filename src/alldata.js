import React from 'react';
import { UserContext } from './index.js';
import Card from './context';





function AllData(){
  const ctx = React.useContext(UserContext);

  

  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
   
    <Card
    bgcolor="light"
    header="User Accounts"
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
        <th scope="col">Balance</th>
      </tr>
    </thead>
    <tbody>

      {ctx.users.map((val,key) => {
        return (
          <tr key={key}>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.password}</td>
            <td>{val.balance}</td>
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
  
  /*
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </>
    */
  );
}

export default AllData;