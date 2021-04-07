import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Card from '../blocks/card/card'
import 'bulma/css/bulma.min.css'

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allCatServer(sort: {order: ASC, fields: text}) {
        edges {
          node {
            id
            text
            user
          }
        }
      }
    }
  `)
  return (
    <div className='container' style={{'flexWrap':'wrap !important'}}>
      {data.allCatServer.edges.map(edge => {
        return <Card key={edge.node.id} other={edge.node.id} text={edge.node.text} user={edge.node.user}></Card>
      })}
    </div> 
  )
}

export default Home
