import React from 'react';
import data from './data.json';
// import title from './data.json';

class HornedBeasts extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      beastVotes: 0
    }
  };

  voteForABeast = () => {
    this.setState({beastVotes: this.state.beastVotes + 1});
  }

  render() {
    return (
      <>
      {data.map(value => 
        <div> 
        <h2>{value.title}</h2>

        <img onClick={this.voteForABeast} id={value.title} src= {value.image_url} alt={value.keyword} height="200" width="200"></img>

        <p>{value.description}</p>
        <div>👍 {this.state.beastVotes}</div>
        </div>
        )
      } 
      </>
    );
  }
}

export default HornedBeasts;