import * as React from "react"
import Button from '@material-ui/core/Button';
import "../styles/index.css"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

const IndexPage = (props) => {
  return (
    <div className="container">
        <BackgroundImage
          className="background"
          fluid={props.data.indexImage.childImageSharp.fluid}
          >
          
        </BackgroundImage>
      </div>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "fishfoodv3.png" }) {
      childImageSharp {
        fluid(maxWidth: 4752) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;