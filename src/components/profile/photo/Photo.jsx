import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Photo = () => {
  const img = useStaticQuery(photo).photo.childImageSharp.fluid;

  return (
    <div className='photo'>
      <Img fluid={img} />
    </div>
  )
}

const photo = graphql`
  query {
    photo: file(relativePath: { eq: "photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Photo;