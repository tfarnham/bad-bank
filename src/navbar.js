function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
    <div className="hovertip">
      <a className="navbar-brand" href="#">BadBank</a>
      <div className="hovertiptext">Home</div>
          </div> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <div className="hovertip">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <div className="hovertiptext">Start by creating an account</div>
          </div> 
          <div className="hovertip">
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <div className="hovertiptext">Login to an existing account</div>
          </div> 
          <div className="hovertip">
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <div className="hovertiptext">Deposit funds here</div>
          </div> 
          <div className="hovertip">
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <div className="hovertiptext">Withdraw funds here</div>
          </div>
          <div className="hovertip">
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
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