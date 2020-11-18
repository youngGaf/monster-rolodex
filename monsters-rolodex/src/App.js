import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('/api/monsters')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value});
  }

  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className='card-name'>Monster Rolodex</h1>
        <SearchBox 
          placeholder='search momsters'
          handleChange={ this.handleChange }
        />
        <CardList monsters={ filteredMonsters } /> 

      </div>
    )
  }

}

export default App;
