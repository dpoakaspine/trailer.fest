import * as React from 'react';

//import Container from 'react-bootstrap/Container';


import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import Product from '../components/Product'
import Quote from '../components/Quote'
import Title from '../components/Title'
import Flag from '../components/Flag'
import Glossary from '../components/Glossary'
import MyButton from '../components/Button'
import Content from '../components/Content'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Item extends React.Component {

  static Title = Title
  static Button = MyButton
  static Content = Content
  static Flag = Flag
  static Glossary = Glossary

  constructor(props) {

      super(props)



      this.d( this )

      this.props = props

      this.has = props

      this.has = {
          id: 1,
          title: props.title || false,
          flag: props.flag || false,
          slug: props.slug || this.sanitizeSlug( this.title ) || false,
          button: props.button || false,
          url: props.url || false,
          ref: React.createRef(),
          type: props.type || 'Item',
          hooks: props.hooks || [],
          content: props.children || false,
          children: props.children || [],
          classes: {
            item: ["m-2","p-2"],
            parent: ["item","item-type-"+this.get_the_type(),"cover"]
          },
          media: {
            images: [
              { url: props.image || 'https://images.unsplash.com/photo-1585383234137-2367d3c5302d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' }
            ]
          }
      }

      this.meta = {
        created:  new Date(),
        permalink:  props.permalink || false,
        target:  props.target || false,
      }


      if(props) {
      for (const [key, value] of Object.entries( props )) {
        this.set(key, value)
      }
      }

      this.state = {
        isActive: props.isActive || false,
        isSeen: props.isSeen || false,
      }

      this.handleClick = this.handleClick.bind(this)

  }

  // function to handle the click
   handleClick() {

     this.d('this.state')
     this.d(this.state)
    this.setState({ isActive: !this.state.isActive });


    }

    componentDidMount() {

      var that = this

      if(this.get('ref').current && !this.has.observer ) {


      this.has.observer = new IntersectionObserver (function (entries, {}) {
      	entries.forEach(function(entry) {
      		if (entry.isIntersecting) {
      			that.setState({ isActive: true });
            that.setState({ isSeen: true });
      		}
      	},{});
      });

      this.has.observer.observe(that.get('ref').current);


      }

    }

  show( item ) {
    //return this.render()


    return item.render()

  }


  d( data ) {
    console.log( data )
  }

  get( key ) {
    return this.has[key] || false
  }

  set( key, value ) {


    if(value) {
      if(!this.has[ key ]) this.has[ key ] = {}
      this.has[ key ] = value
      //this.has[ key ].push( value )
    }
  }

  make( item ) {
    var newitem = new Item( item )

    return newitem
  }

  get_the_title() {
    return this.has.title || false
  }

  get_the_image() {
    return this.has.media.images[ 0 ].url || false
  }

  the_title() {
    if( this.get_the_title() ) return (
      <Item.Title>{ this.get_the_title() }</Item.Title>
    )
  }



  the_Glossary() {


    var items = this.get('glossary')


    if( items ) return (
      this.renderX( items )
    )
  }

  get_the_children() {

    var children_new = []
    var children = this.get('children')



    if(children.length>0) {
      children_new = children
    } else {
      children_new.push(children)
    }

    return children_new
  }

  get_the_flag() {
    return this.has.flag + " #" + this.get_the_type()
  }

  get_the_type() {
    return this.has.type
  }

  get_the_content() {
    return this.has.content
  }

  renderX( children ) {

    if(!children) children = this.get_the_children()


    return React.Children.map(children, (child, i)=>{



      //var childchildren = child.props.children
      //{{ React.createElement(ListGroup.Item, child.props, child) }}

      return (
        <ListGroup.Item><Item.Button { ...child.props } href={ "#"+this.sanitizeSlug(child) }>{child}</Item.Button></ListGroup.Item>

      )


    return child


    })
  }

  renderChildren() {

    var children = this.get_the_children()



    return React.Children.map(children, (child, i)=>{

      var childchildren = child.props.children

      if( this.isElement(child) ) {

        let obj = {}
        obj[ childchildren ] = childchildren

        if( child.type.name == "Title" ) {
          //this.set('glossary', obj[ childchildren ] )
          this.has.title = "xxxx"+childchildren

          //this.has.children.splice(i, 1);

          //this.has.children[i] = null

        }
      }

      if( !this.isElement(child) ) return child
      //return child


    })
  }

  sanitizeSlug( str )
  {
    if(!str) str = ""
  	str = str.replace(/^\s+|\s+$/g, ''); // trim
  	str = str.toLowerCase();

  	// remove accents, swap ñ for n, etc
  	var from = "àáäâèéëêìíïîòóöôùúüûñçěščřžýúůďťň·/_,:;";
  	var to   = "aaaaeeeeiiiioooouuuuncescrzyuudtn------";

  	for (var i=0, l=from.length ; i<l ; i++)
  	{
  		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  	}

  	str = str.replace('.', '-') // replace a dot by a dash
  		.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
  		.replace(/\s+/g, '-') // collapse whitespace and replace by a dash
  		.replace(/-+/g, '-') // collapse dashes
  		.replace( /\//g, '' ); // collapse all forward-slashes

  	return str;
  }

  remove(value,arr) {


    arr = arr.filter(item => item !== value)

    return arr
  }

  get_the_classes(key) {
    if(this.has.classes[key]) return this.has.classes[key]
    return []
  }

  the_classes(key) {
    if(this.has.classes[key]) return this.get_the_classes( key ).join(' ')
    return false
  }

  addClass(key,classs) {
    if(!this.get_the_classes( key ).includes( classs )) {
      this.get_the_classes( key ).push( classs )
      return classs
    }
    return false
  }

  removeClass(key,classs) {
    if(this.get_the_classes( key ).includes( classs )) {
      this.d('deleting class '+classs)
      this.d( this.get_the_classes( key ) )
      this.has.classes[key] = this.arrayRemove( this.has.classes[key], classs )
      this.d( this.get_the_classes( key ) )
      return true
    }
    return false
  }

   arrayRemove(arr, value) {

          return arr.filter(function(ele){
              return ele != value;
          });
      }


  checkState() {

    var that = this
    if( that.state.isActive ) {
      that.addClass('parent','isActive')
      that.addClass('item','isActive')
    } else {
      that.removeClass('parent','isActive')
      that.removeClass('item','isActive')
    }

    if( that.state.isSeen ) {

      that.get('observer').disconnect()
      that.addClass('item','enter')
      that.addClass('item','isSeen')
    } else {
      that.removeClass('item','isSeen')
    }

    return this.state
  }

  handle(entries) {
    if (entries[0].isIntersecting) {

    this.d('handling key: '+entries)
  }
  }

  useEffect() {

  }


  render() {

    this.checkState()

    return (

    <div ref={this.has.ref} onClick={this.handleClick} className={ this.the_classes('parent')  }>
    <Card className="" className={ this.the_classes('item') }>

      <Card.Body>
      { this.state.isActive }
  { JSON.stringify(this.has.classes) }
      <Item.Content>





      { this.the_title() }


      { this.get_the_content() }
      </Item.Content>

      </Card.Body>






    </Card>
    </div>
    )

  }



  isClassComponent(component) {
      return (
          typeof component === 'function' &&
          !!component.prototype.isReactComponent
      )
  }

  isFunctionComponent(component) {
      return (
          typeof component === 'function' &&
          String(component).includes('return React.createElement')
      )
  }

  isReactComponent(component) {
      return (
          this.isClassComponent(component) ||
          this.isFunctionComponent(component)
      )
  }

  isElement(element) {
      return React.isValidElement(element);
  }

  isDOMTypeElement(element) {
      return this.isElement(element) && typeof element.type === 'string';
  }

  isCompositeTypeElement(element) {
      return this.isElement(element) && typeof element.type === 'function';
  }

}


export { Product, Quote, Flag, Glossary }
export default Item
