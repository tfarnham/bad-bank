import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Routes, Link, HashRouter} from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Login from './login';
import Withdraw from './withdraw';
import Balance from './balance';
import AllData from './alldata';


import 'bootstrap/dist/css/bootstrap.css';



export const UserContext = React.createContext(null);
//const Route       = ReactRouterDOM.Route;
//const Link        = ReactRouterDOM.Link;
//const HashRouter  = ReactRouterDOM.HashRouter;

function Spa() {
  return (
    <HashRouter>
      <NavBar></NavBar>
      <UserContext.Provider value={{transactions:[],users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
      <div className="container" style={{padding: "20px"}}>Test 
        </div>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          <Route path="/Login/" element={<Login />} />
          <Route path="/Deposit/" element={<Deposit />} />
          <Route path="/Withdraw/" element={<Withdraw />} />
          <Route path="/Balance/" element={<Balance />} />
          <Route path="/AllData/" element={<AllData />} />
        </Routes>

      </UserContext.Provider>      
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>
);

/*
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
*/
