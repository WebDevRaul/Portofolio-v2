import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Users from './utils/users';
import Title from '../../../common/title/Title';
import Box from './Box';

import StyledReview from './Styled_Review';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { allImageSharp } = useStaticQuery(photo);
  
  const node = allImageSharp.nodes[index].fluid;
  const length = allImageSharp.nodes.length - 1

  const next = () => index === length ? setIndex(0) : setIndex(index + 1);
  const prev = () => index === 0 ? setIndex(length) : setIndex(index - 1);

  return(
    <StyledReview>
      <div className='review'>
        <Title text='Review' />
        <div>
          {
            Users.map((el, index) => {
              const { src } = node;
              if(el.photo === src.slice(src.lastIndexOf('/'))) return <Box key={index} image={node} {...el} />
              return
            })
          }
        </div>
        <div>
          <button onClick={() => prev()}>Previous</button>
          <button onClick={() => next()}>Next</button>
        </div>
      </div>
    </StyledReview>
  )
}

const photo = graphql`
  query {
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