//import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

//  1.  Constructor -> State
//  2.  Render()
//  3.  componentDidMount()

class App extends Component {
  constructor() {
    super()
    //console.log('Constructor');
    //  You need to initialized a state  ( initial State ) in this case is empty []
    this.state = {
      monsters: [],  //  Initial Value
      searchField: ''
    }
  }

  componentDidMount() {
    //console.log( 'componentDidMount' );
    fetch('https://jsonplaceholder.typicode.com/users') //  Return a promises
      .then((response) => response.json())
      .then((users) => this.setState(() => { return { monsters: users } }))
  }

  //  Just read one time in a file not every time the render component
  onsearchChange = ( $event ) => { 
    const searchField = $event.target.value.toLocaleLowerCase() //  Captamos el termino de busqueda
    this.setState(() => {return { searchField }}) //  Lo seteamos como termino de busqueda
  }

  render() {
    const { monsters, searchField } = this.state
    //console.log('Render');
    //  Creando un nuevo Arreglo [Lista] filtrando por el termino de busqueda en el Arreglo original de Monsters
    const selecMonster = monsters.filter(( monster ) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
     });

    return (
      <div className="App">
        
      <h1 className='app-title'> Monster Rolodex </h1>


        <SearchBox onsearchChange={ this.onsearchChange } />
        <CardList monsters={ selecMonster } />
      </div>
    );
  }
}

export default App;