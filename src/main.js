import React from 'react';
import HornedBeasts from './hornedbeasts';



class Main extends React.Component {
  render() {
    return(
      <>
      {this.props.tiles.map((beasts, index) =>
      <HornedBeasts 
      key={index}
      src={beasts.image_url}
      title={beasts.title}
      description={beasts.description}
      index={index}
      handleShow={this.props.handleShow}
      horns={beasts.horns}
      />
      )}
      </>
    )
  }
}   
 
export default Main