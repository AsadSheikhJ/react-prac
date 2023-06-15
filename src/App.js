import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      name : {firstName :'Asad',lastName:'Sheikh'}
    }
  }
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <p>
              Hi {this.state.name.firstName} {this.setState.name.lastName}, testing function value.
            </p>
            <button onClick={() =>{
              this.setState({
                name:{firstName:'Usama',lastName:'Sheikh'},
              },
              console.log(this.state)
                );
            }}>Change Name</button>
            {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
          </header>
        </div>
      );
    }
  }
export default App;
