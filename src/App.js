import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  console.log('rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setfilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searhFieldString = event.target.value.toLowerCase();
    setSearchField(searhFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Name Search</h1>
      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search Monster'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searhField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       },
//         // console.log(users),
//         // console.log(this.state)
//       ));
//   }

//   onSearchChange = (event) => {
//     // console.log(event.target.value);
//     const searhField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searhField }
//     });
//   }

//   render() {

//     const { monsters, searhField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searhField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Name Search</h1>
//         <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='Search Monster' />
//         {/* {filteredMonsters.map((monster) => {
//           return <p key={monster.id}>{monster.name}</p>;
//         })} */}
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }
export default App;
