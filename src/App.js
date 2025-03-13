import React, { Component } from 'react'
import './App.css';
import './components/Header.js'
import Song from'./components/Song.js'
import Header from './components/Header.js'


class App extends Component {
  componentDidMount() {
    console.log('La aplicación se ha cargado correctamente.');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className='main'>
          <section className='songs'>
            <Song image={require('./img/placeholder.jpg')} title='Shape of you' artist='Ed Sheeran' length='4:24' />
            <Song title='Bohemian Rhapsody' artist='Queen' length='5:55' />
            <Song title='Stairway to Heaven' artist='Led Zeppelin' length='8:02' />
            <Song title='Hotel California' artist='Eagles' length='6:30' />
          </section>
        </main>
      </div>
    );
  }
}

export default App;

