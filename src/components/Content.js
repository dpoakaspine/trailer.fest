import * as React from 'react';

import Card from 'react-bootstrap/Card';

class Content extends React.Component {

  constructor(props) {
      super(props)
      //this.props = props
      //const this = new Item()
      this.props = props
      //this.type = "Product"
  }

  render() {

  return (

  <Card.Text>
  { this.props.children }
  </Card.Text>
  
  )
}
}


export default Content
