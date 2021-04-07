import React, {Component, useState} from 'react'
import {CardList} from './components/card-list/card-list.component.jsx'
import {SearchBox} from './components/search-box/search-box.component.jsx'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      heroes: [],
      searchField: '',
    }
  }
  
  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({heroes: users}))
  }

  render (){

    const {heroes, searchField} = this.state;
    const filteredHeroes = heroes.filter(hero =>
      hero.name.toLowerCase().includes(searchField.toLowerCase()) )

    return (

  
      <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder='Search Heroes' 
        handleChange= {this.handleChange}
      />
      <CardList heroes={filteredHeroes}>
      </CardList>
      </div>
    );
  }
}

export default App;
