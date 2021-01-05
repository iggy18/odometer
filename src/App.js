import React from 'react'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      odometer: "0000",
    }
    this.baseState = this.state
    this.addOne = this.addOne.bind(this);
    this.addTen = this.addTen.bind(this);
    this.addOneHundred = this.addOneHundred.bind(this);
    this.addOneThousand = this.addOneThousand.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset(){
    this.setState({
      odometer: (parseInt(this.state.odometer) - parseInt(this.state.odometer)).toString().padStart(4,0)
    });
  }

  addOne(){
    this.setState({
      odometer: (parseInt(this.state.odometer) + 1).toString().padStart(4,0)
    });
  }

  addTen(){
    this.setState({
      odometer: (parseInt(this.state.odometer) + 10).toString().padStart(4,0)
    });
  }

  addOneHundred(){
    this.setState({
      odometer: (parseInt(this.state.odometer) + 100).toString().padStart(4,0)
    });
  }

  addOneThousand(){
    this.setState({
      odometer: (parseInt(this.state.odometer) + 1000).toString().padStart(4,0)
    });
  }

  render() {
    return (
      <div className="App"> 
        <Header />
        <h1>Hello there!!!!!!!!</h1>
        <Odometer message={this.state.odometer} />
        <button onClick={this.addOne}> +1 </button><button onClick={this.addTen}> +10 </button><button onClick={this.addOneHundred}> +100 </button><button onClick={this.addOneThousand}> +1000 </button>
        
        <button onClick={this.reset}>Reset</button>
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
      <h1>{props.message}</h1>
      <p>neat</p>
    </body>
  );
}


export default App;