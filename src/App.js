import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>THE HORNED BEASTS</h1>

        <main>
          <div id="HornedBeasts">
          </div>
          <h2>BeastOne</h2>
          <img id="beastOne" src="https://via.placeholder.com/150" alt="img1"></img>
          <p>THIS IS THE DESCRIPTION of IMG 1</p>

          <h2>BestTwo</h2>
          <img id="beastTwo" src="https://via.placeholder.com/150" alt="img2"></img>
          <p>THIS IS THE DESCRIPTION of IMG 2</p>

          <h2>BeastThree</h2>
          <img id="beastThree" src="https://via.placeholder.com/150" alt="img3"></img>
          <p>THIS IS THE DESCRIPTION of IMG 3</p>

        </main>

        <footer>Brian Lemons</footer>
      </header>


    </div>
  );
}

// TESTS for the stretch goals

export default App;
