import React from 'react';
import data from './data.json';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      beastVotes: 0,
      imageNumber: 1
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

        <img  id={value.title} src= {value.image_url} alt={value.keyword} height="200" width="200"></img>
        <p>{value.description}</p>
        <Button onClick={this.voteForABeast}  variant="secondary">CLICK ME IF I'M YOUR FAVORITE</Button>{'👍' + this.state.beastVotes}
        </div>
        )
      } 
      </>
    );
  }
}

export default HornedBeasts;