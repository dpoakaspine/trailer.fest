import * as React from 'react';

//import Container from 'react-bootstrap/Container';
import Item from '../components/Item'


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class System extends React.Component {


  constructor(props) {
    super(props);


    this.action = false
    this.items = []
    this.hooks = []


    //this.addx( 'neee', { id: 99 } )

    this.d( this )

    this.add_action('testing', function() {
      return "aha!"

    })
  }

  Items2() {

    //this.Item = new Item()
    return this.Item
  }

  d( data = this ) {
    console.log( data )
  }

  add_action( key, callback ) {

    if(key) {

      if(! this.hooks[ key ] ) this.hooks[ key ] = []
      this.hooks[ key ].push( callback )
    }
  }

  do_action( key ) {

    return

    if(this.hooks[ key ] && this.hooks[ key ]) {

      this.d('do_action with')
      this.d(key)

      var callback = this.hooks[ key ][0]

      var result = callback()
      this.d( result )
       return result



    }
  }

  addx( key, item ) {

    if(!this.items[ key ]) this.items[ key ] = []
    this.items[ key ].push( new Item( item ) )
  }

  componentDidMount2() {
    this.d('dcomponentDidMount with')
    this.d(this)
  }

  show2( type, item ) {
    //var item = new Item()
    return this.Item.render()
  }

  Title() {
    return this.title
  }

  render() {

    //if(this.props.action) this.do_action( this.props.action );


  return (



    <div>
    { this.Title() }
    { this.do_action( this.props.action ) }
    </div>
  )
}


}


export default System
