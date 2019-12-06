import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Users from './utils/users';
import Title from '../../../common/title/Title';
import Box from './Box';

import StyledReview from './Styled_Review';
import Buttons from './Buttons';

const Review = () => {
  const [photo, setPhoto] = useState(0);
  const [state, setState] = useState({ animate: false, left: false, right: false });
  const { allImageSharp } = useStaticQuery(image);
  
  const node = allImageSharp.nodes[photo].fluid;
  const length = allImageSharp.nodes.length - 1
  
  const onNext = () => {
    setTimeout(() => photo === length ? setPhoto(0) : setPhoto(photo + 1), 1000);
    setState({ animate: !state.animate, left: true, right: false });
  };
  const onPrev = () => {
    setTimeout(() => photo === 0 ? setPhoto(length) : setPhoto(photo - 1), 1000);
    setState({ animate: !state.animate, left: false, right: true});
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
              if(el.photo === src.slice(src.lastIndexOf('/'))) return <Box key={index} {...state} image={node} {...el} />
            })
          }
        <i className='review-bottom' />
        <Buttons onNext={onNext} onPrev={onPrev} />
      </div>
    </StyledReview>
  )
}

const image = graphql`
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