import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      beastVotes: 0,
    }
  };

  voteForABeast = () => {
    this.setState({beastVotes: this.state.beastVotes + 1});
  }

  render() {
    return (
      <>
      <Card 
      style={{ width: '20rem' }}
      bg="primary"
      text="warning"
      className="beastImages"
      onClick={this.voteForABeast}
      >
        <Card.Img variant="bottom" src={this.props.src}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            CLICK ME IF I'M YOUR FAVORITE BEAST
          </Card.Text>
          <Card.Text>
          👍 = {this.state.beastVotes}
          </Card.Text>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
      </>
    );
  }
}

export default HornedBeasts;
