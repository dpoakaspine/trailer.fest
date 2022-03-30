import * as React from 'react';

import Item from '../components/Item'

class Quote extends React.Component {

  constructor(props) {
      super(props)
      this.props = props
      //const this = new Item()

      this.has = {
        source: props.title,
        title: false,
      }
      //this.type = "Product"

  }

  render() {

    const children = this.props.children


  return (
  <Item type="Quote"

   { ...this.has }>


  <figure>
    <blockquote class="blockquote">
      { children }
    </blockquote>
    <figcaption class="blockquote-footer">

      <Item.Title as="strong">{ this.has.source }</Item.Title> this.props.title Someone famous in <cite title="Source Title"> props.source { this.props.source }</cite>
    </figcaption>
  </figure>


  </Item>
  )
}
}


export default Quote
