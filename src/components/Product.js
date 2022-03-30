import * as React from 'react';

import Item from '../components/Item'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

class Product extends React.Component {

  constructor(props) {
      super(props)
      this.props = props
      this.title = this.props.title
      //const this = new Item()

      this.has = {
        classes: {
          item: ["m-2 mt-2"]
        }
      }

  }

  render() {

  return (
  <Item type="Product"
  { ... this.has }
  { ... this.props }
  title={false}
   >

  <div className="d-flex align-items-center">
    <div className="flex-shrink-1">
      <Image className="img-fluid rounded-start" width="200" height="400" src="https://source.unsplash.com/random/200×200/?design" />
    </div>
    <div className="flex-grow-1 ms-3 p-4">

    <Item.Title>{ this.title }</Item.Title>
    { this.props.children }
    <Item.Button variant="primary">{ this.props.button }</Item.Button>

    </div>
  </div>
  </Item>
  )
}
}


export default Product
