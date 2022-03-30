import * as React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Item from '../components/Item'


class Section extends Item {

  constructor(props) {
      super(props)
      this.props = props

      this.has.classes.parent = ["section","cover","p-2","m-2"]
      this.has2 = {
        rows: parseInt(this.props.rows) || 1,
        cols: 12
      }

      this.handleClick = this.handleClick.bind(this)

      //this.handleClick = this.props.handleClick

      this.set('rows', parseInt(this.has2.rows) )
      this.set('cols', parseInt(12/this.has2.rows) )

  }

  render() {

    this.checkState()

    return (
      <div onClick={this.handleClick} className="section cover p-4 my-4" className={this.the_classes('parent') }  { ...this.props } style={{ backgroundImage: 'url('+this.get('image')+')'}}>
      <Row className="justify-content-md-center" className={this.the_classes('item') }>



      { React.Children.map(this.get('children'), child => (
          <Col xs md="auto" lg={ this.has.cols } col={ this.has.cols } className="h-100">

          { child }

          </Col>
      ))}

      </Row>
      </div>
    )
  }
}


export default Section
