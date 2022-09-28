import { useLocation } from "react-router-dom";

function NavBar(){

  // with motivation from: https://medium.com/how-to-react/add-an-active-classname-to-the-link-using-react-router-b7c350473916


  // use the hook useLocation to update when the location changes
  // extract the location (the hash) from the pathname
  // use logic in each navbar link to ADD the class "nav-link-active" when active
  const location = useLocation();
  const { pathname } = location;
  console.log('in NavBar: ', pathname);
  const splitLocation = pathname.split("/");

  return(
    <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
    <div className="hovertip">
      <a className={splitLocation[1] === "" ? "navbar-brand nav-link-active" : "navbar-brand"} href="#">BadBank</a>
      <div className="hovertiptext">Home</div>
          </div> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <div className="hovertip">
          <li className="nav-item">
            <a className={splitLocation[1] === "CreateAccount" ? "nav-link nav-link-active" : "nav-link"} href="#/CreateAccount/">Create Account</a>
          </li>
          <div className="hovertiptext">Start by creating an account</div>
          </div> 
          <div className="hovertip">
          <li className="nav-item">
            <a className={splitLocation[1] === "login" ? "nav-link nav-link-active" : "nav-link"} href="#/login/">Login</a>
          </li>
          <div className="hovertiptext">Login to an existing account</div>
          </div> 
          <div className="hovertip">
          <li className="nav-item">
            <a className={splitLocation[1] === "deposit" ? "nav-link nav-link-active" : "nav-link"} href="#/deposit/">Deposit</a>
          </li>
          <div className="hovertiptext">Deposit funds here</div>
          </div> 
          <div className="hovertip">
          <li className="nav-item">
            <a className={splitLocation[1] === "withdraw" ? "nav-link nav-link-active" : "nav-link"} href="#/withdraw/">Withdraw</a>
          </li>
          <div className="hovertiptext">Withdraw funds here</div>
          </div>
          <div className="hovertip">
          <li className="nav-item">
            <a className={splitLocation[1] === "alldata" ? "nav-link nav-link-active" : "nav-link"} href="#/alldata/">AllData</a>
          </li>
          <div className="hovertiptext">Debug data</div>
          </div>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default NavBar;