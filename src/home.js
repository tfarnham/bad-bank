import Card from './context';

function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="This is a test environment, passwords are not saved but are shown in cleartext."
      body={(<img src="./bank.png" className="img-fluid" alt="Generic bank icon"/>)}
    />    
  );  
}

export default Home;