import './App.css';
import './components/Header.js'
import Song from'./components/Song.js'
import Header from './components/Header.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main className='main'>
      <section className='songs'>
        <Song  image={require('./img/placeholder.jpg')} title='Shape of you' artist='Ed Sheeran' lenght='4:24'/>
        <Song  title='Bohemian Rhapsody' artist='Queen' lenght='5:55'/>
        <Song  title='Stairway to Heaven' artist='Led Zeppelin' lenght='8:02'/>
        <Song  title='Hotel California' artist='Eagles' lenght='6:30'/>
      </section>
      </main>
    </div>
  );
}

export default App;
