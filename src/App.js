import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


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
        // console.log(users),
        // console.log(this.state)
      ));
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    const searhField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searhField }
    });
  }

  render() {

    const { monsters, searhField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searhField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Name Search</h1>
        <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='Search Monster' />
        {/* {filteredMonsters.map((monster) => {
          return <p key={monster.id}>{monster.name}</p>;
        })} */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
