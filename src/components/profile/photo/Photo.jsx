import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Photo = () => {
  const img = useStaticQuery(photo).file.childImageSharp.fluid;

  return (
    <div className='photo'>
      <Img fluid={img} />
    </div>
  )
}

const photo = graphql`
query {
  file(relativePath: {eq: "photo.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default Photo;