import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'

import StyledBckground from './Styled_Background';

const Background = () => {
  const img = useStaticQuery(background).desktop.childImageSharp.fluid
  return (
    <StyledBckground>
      <div className='wrapper'>
        <BackgroundImage fluid={img}>
          <div className='background' />
        </BackgroundImage>
      </div>
    </StyledBckground>
  )
}

const background = graphql`
  query {
    desktop: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Background;