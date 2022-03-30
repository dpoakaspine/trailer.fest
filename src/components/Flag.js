import * as React from 'react';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

class Flag extends React.Component {

  constructor(props) {
      super(props)
      //this.props = props
      //const this = new Item()
      this.props = props
      //this.type = "Product"


  }

  render() {

  return (
  <Badge { ...this.props }>
  { this.props.children }
  </Badge>
  )
}
}


export default Flag
