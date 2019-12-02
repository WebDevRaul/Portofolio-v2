import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Photo = () => {
  const data = useStaticQuery(photo).placeholderImage.childImageSharp.fluid;

  return (
    <div className='photo'>
      <Img fluid={data} />
    </div>
  )
}

const photo = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "placeholder.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Photo;