import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './main';
import SelectedBeast from './SelectedBeast';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <SelectedBeast />
      <Main />
      <Footer />
      </header>
    </div>
  );
}

// TESTS for the stretch goals

export default App;
