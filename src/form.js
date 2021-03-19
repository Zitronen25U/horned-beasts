import React from 'react';
import Form from 'react-bootstrap/Form'


class HornForm extends React.Component{


  
  render(){
    return(
      <Form>
        <Form.Group controlId="">
         <Form.Label>Wanna See A Beast With A Certain Amount Of Horns?</Form.Label>
            <Form.Control as="select" custom>
              <option>1 Horn</option>
              <option>2 Horns</option>
              <option>3 Horns</option>
              <option>100 Horns</option>
           </Form.Control>
        </Form.Group>
      </Form>
    )
  }
};

export default HornForm;