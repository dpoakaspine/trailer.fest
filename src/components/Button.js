import * as React from 'react';

import Button from 'react-bootstrap/Button';

class MyButton extends React.Component {

  constructor(props) {
      super(props)
      //this.props = props
      //const this = new Item()
      this.props = props
      //this.type = "Product"
  }

  render() {

  return (
  <Button  { ...this.props }>
  { this.props.children }
  </Button>
  )
}
}


export default MyButton
