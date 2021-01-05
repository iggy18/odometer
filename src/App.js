import React from 'react'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      odometer: '0000',
    }
  }

  addClicked(){
    this.setState({
      odometer: + "10"
    });
  }

  render() {
    return (
      <div className="App"> 
        <Header />
        <h1>Hello there!!!!!!!!</h1>
        <Odometer message={this.state.odometer} />
        <button onClick={this.addOne}>+1</button><button onClick={this.addTen}>+10</button><button onClick={this.addOneHundred}>+100</button><button onClick={this.addOneThousand}>+1000</button>
        <Footer />
      </div>
    )};
}


function Header() {
  return(
    <nav> 
      <h2>this is the header</h2>
    </nav>
  );
}


function Footer() {
  return(
    <footer>
      <p>this is the footer</p>
    </footer>
  );
}


function Odometer(props) {
  return(
    <body>
      <h4>{props.message}</h4>
      <p>neat</p>
    </body>
  );
}


export default App;