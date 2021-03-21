import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardColumns } from 'react-bootstrap';

class SelectedBeast extends React.Component{
  render(){
    return(
      <div>

      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Dialog>
            <Modal.Header closeButton>
            <Modal.Title>HERE IS YOUR BEAST</Modal.Title>
            </Modal.Header>

          <Modal.Body>
            {<CardColumns 
              style={{width: '20rem', height: '10rem'}}
              bg="primary"
              text="warning"
              className="beastImages"
            >
              <Card.Body>
                <Card.Title>{this.props.SelectedBeast.title}</Card.Title>
                <img alt={this.props.SelectedBeast.title} src={this.props.SelectedBeast.src} width={10}/>
                <Card.Text>
                  {this.props.SelectedBeast.description}
                </Card.Text>
              </Card.Body>

           </CardColumns>} 

          </Modal.Body>

        </Modal.Dialog>

       </Modal>

    </div>
    )
  }
}

export default SelectedBeast