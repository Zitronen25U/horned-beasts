import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './main';
import SelectedBeast from './SelectedBeast';
import data from './data.json'
import React from 'react';
import HornForm from './HornForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: data,
      show: false,
      SelectedBeast: {},
      beastVotes: 0,
    }
  }


  handleShow = (index) => {
    this.setState({ show: true, SelectedBeast: this.state.data[index]});
  };
  
  handleHide = () => {
    this.setState({show: false});
  };

  handleSelect = () => {
    
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Main 
          tiles={this.state.data}
          handleShow={this.handleShow}
          />
    
          <SelectedBeast
          show={this.state.show}
          SelectedBeast={this.state.SelectedBeast}
          hide={this.handleHide}
          />
          <Footer/>
          </header>
      </div>
    );
  }
}

export default App;
