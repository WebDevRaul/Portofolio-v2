import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Users from './utils/users';
import Title from '../../../common/title/Title';
import Box from './Box';

import StyledReview from './Styled_Review';
import Buttons from './Buttons';

const Review = () => {
  const [state, setState] = useState(0);
  const [animate, setAnimate] = useState(true);
  const { allImageSharp } = useStaticQuery(photo);
  
  const node = allImageSharp.nodes[state].fluid;
  const length = allImageSharp.nodes.length - 1
  
  const onNext = () => {
    setTimeout(() => state === length ? setState(0) : setState(state + 1), 1000);
    setAnimate(!animate);
  };
  const onPrev = () => {
    setTimeout(() => state === 0 ? setState(length) : setState(state - 1), 1000);
    setAnimate(!animate);
  }

  return(
    <StyledReview>
      <div className='review'>
        <Title text='Review' />
        <i className='review-top' />
          {
            // eslint-disable-next-line
            Users.map((el, index) => {
              const { src } = node;
              if(el.photo === src.slice(src.lastIndexOf('/'))) return <Box key={index} animate={animate} image={node} {...el} />
            })
          }
        <i className='review-bottom' />
        <Buttons onNext={onNext} onPrev={onPrev} />
      </div>
    </StyledReview>
  )
}

const photo = graphql`
  query {
    allImageSharp {
      nodes {
        fluid(maxHeight: 75, maxWidth: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Review;