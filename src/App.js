import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        console.log(this.state)
      ));
  }

  render() {
    return (
      <div className="App">
        <input className='searh-box' type='search' placeholder='searh monsters' onChange={(event) => {
          console.log(event.target.value);
        }} />
        {this.state.monsters.map((monster) => {
          return <p key={monster.id}>{monster.name}</p>;
        })}
      </div>
    );
  }
}
export default App;
