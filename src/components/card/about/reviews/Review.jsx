import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Users from './utils/users';
import Title from '../../../common/title/Title';
import Box from './Box';

import StyledReview from './Styled_Review';

const Review = () => {
  const data = useStaticQuery(photo).allImageSharp.nodes
  return(
    <StyledReview>
      <div className='review'>
        <Title text='Review' />
        {
          data.map((el, index) => {
            const { src } = el.fluid;
            const user = Users.filter(i => i.image === src.slice(src.lastIndexOf('/')))[0];
            return <Box key={index} {...user} image={el.fluid} />
          })
        }
      </div>
    </StyledReview>
  )
}

const photo = graphql`
  query photos {
    allImageSharp {
      nodes {
        fluid(maxHeight: 50, maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Review;