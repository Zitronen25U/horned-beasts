import React from 'react';
import HornedBeasts from './hornedbeasts';
import data from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns'

class Main extends React.Component {
  render() {
    return(
      <CardColumns>
        {data.map((beast, index) => (
          <div key={index}>
            <HornedBeasts
            src = {beast.image_url}
            title = {beast.title}
            description = {beast.description}
            />
          </div>
        ))}
      </CardColumns>
    )
  }
}   
 
export default Main