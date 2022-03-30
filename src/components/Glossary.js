import * as React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Glossary extends React.Component {

  constructor(props) {
      super(props)
      //this.props = props
      //const this = new Item()
      this.props = props
      //this.type = "Product"


  }

  render() {

  return (
  <ListGroup variant="flush"
    { ...this.props }>
    { this.props.children }
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  </ListGroup>
  )
}
}


export default Glossary
