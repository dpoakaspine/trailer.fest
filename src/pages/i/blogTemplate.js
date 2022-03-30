import React from "react"
import { graphql } from "gatsby"

import Layout from '../../components/layout'
import Image from '../../components/image'
import Seo from '../../components/seo'

import Item, { Product, Quote, Glossary } from '../../components/Item'
import Section from '../../components/Section'

import System from '../../components/System'
import Waypoint from '../../components/Waypoint'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  var item = new Item(frontmatter)
  return ( JSON.stringify( item, 2, null ) )
  return (

    <Layout>


        <Section className="section cover" image={ item.get_the_image() } style={{   }} >
        <Container style={{  }}>


        <Section className="section contain" image="https://images.unsplash.com/photo-1585383234137-2367d3c5302d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" style={{  width: "50vw", minHeight: "300px", backgroundSize: "contain", backgroundImage: `url(https://images.unsplash.com/photo-1585383234137-2367d3c5302d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)` }} >
        </Section>


        </Container>


        </Section>






        <Container className="p-4 container-sm" style={{ maxWidth2: '700px', overflow2: "hidden" } }>


        <h1>{ item.get_the_title() }</h1>

                <div className="sticky-topxx">

                <ListGroup variant="flush" horizontal="false" className="m-4 p-4">
                  {frontmatter.excerpt}
                  { item.the_Glossary() }
                </ListGroup>



                </div>



        <article style={{ maxWidth: '720px' }} className="mx-auto">



        <System />








        <System action="testing" />
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: html }}
        />



        </article>

        <Waypoint target="2">

        <Section rows="1" left="9">

        <Quote title="prop Stefan Böttcher">

          <Item.Content> Item.Contentbla bl blq</Item.Content>

        </Quote>



        </Section>

        </Waypoint>

        <Waypoint target="3">

        <Section rows="1">

        <Quote title="prop Stefan Böttcher">

          <Item.Content> Item.Contentbla bl blq</Item.Content>

        </Quote>

        <Product flag="prop Angebit!" button="jetzt kaufen" title="Test">
          sadasdsa

        </Product>

        </Section>

        </Waypoint>
          <Waypoint target="5">

            <Section image={ item.get_the_image() } rows="2">
            <Item title="PropTitle" flag="Angebot!">
              <Item.Title>Item.Title sdsdsd</Item.Title>

              <Item.Content>
              Item.Content sad adsasd adas

              </Item.Content>

              <Item.Button>BUTTON sdsdsd</Item.Button>

            </Item>



            <Quote title="prop Stefan Böttcher">

              <Item.Content> Item.Contentbla bl blq</Item.Content>

            </Quote>

            </Section>

          </Waypoint>

    </Container>
    </Layout>


  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        excerpt
        tags
        glossary
      }
    }
  }
`
