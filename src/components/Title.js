import * as React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Title extends React.Component {

  constructor(props) {
      super(props)
      //this.props = props
      //const this = new Item()
      this.props = props
      //this.type = "Product"

      this.as = this.props.as || 'h5'
  }

  render() {

  return (
  <Card.Title  { ...this.props }>
  { this.props.children }
  </Card.Title>
  )
}
}


export default Title
