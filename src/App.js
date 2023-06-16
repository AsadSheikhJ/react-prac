import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searhField: ''
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

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searhField);
    });

    return (
      <div className="App">
        <input
          className='searh-box'
          type='search'
          placeholder='searh monsters'
          onChange={(event) => {
            console.log(event.target.value);
            const searhField = event.target.value.toLowerCase();

            this.setState(() => {
              return { searhField }
            });
          }} />
        {filteredMonsters.map((monster) => {
          return <p key={monster.id}>{monster.name}</p>;
        })}
      </div>
    );
  }
}
export default App;
