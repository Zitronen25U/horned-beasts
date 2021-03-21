voteForABeast = () => {
  this.setState({beastVotes: this.state.beastVotes + 1});
}

onClick={this.voteForABeast}