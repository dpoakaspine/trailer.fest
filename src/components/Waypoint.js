import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Item, { Product, Quote } from '../components/Item'
import Section from '../components/Section'


class Waypoint extends Item {

  constructor(props) {
      super(props)
      this.props = props
  }

  componentDidMount() {

    console.log( "ComponentDidMount" )
    console.log( this )
    //console.log( document.getElementById("waypoint-"+this.props.target) )

    const el = document.getElementById("waypoint-"+this.props.target)

    if(el) {
      el.innerHTML = "YESSS WAYPOINT!"
      ReactDOM.render( this.render(), el);
    }

  }

  render() {

    /*
    const children = this.getThis('children')

    var childX1 = this.make({
        type: "Item"
    })
    */

    //var childX1_go = childX1.show( )
    //var childX2_go = childX2.show( )


  return (
  <div className="waypoint-content sticky cover" style={{ backgroundImage: `url(${this.props.background})` }} >



    { this.props.children }


  </div>
  )
}
}


export default Waypoint
