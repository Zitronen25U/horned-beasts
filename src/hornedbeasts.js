import React from 'react';
import Button from 'react-bootstrap/Button'

class HornedBeasts extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      beastVotes: 0
    }
  }
  
  voteForABeast = () => {
    this.setState({beastVotes: this.state.beastVotes + 1});
  }
  
  render() {

    return (
      <>

      
          <div onClick={ () => this.props.handleShow(this.props.index)}>

            <img src={this.props.src} alt={this.props.title} title={this.props.title} width={200}/>

            <p>{this.props.description}</p>

          </div>
        <Button onClick={this.props.voteForABeast}>CLICK ME IF I'M YOUR FAVORITE BEAST </Button>
        <p>👍 = {this.props.beastVotes}</p>
        <p><br></br></p>
      </>
    );
  }
}

export default HornedBeasts;

