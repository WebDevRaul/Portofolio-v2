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
  const [active, setActive] = useState(false);
  const { allImageSharp } = useStaticQuery(image);
  
  const node = allImageSharp.nodes[photo].fluid;
  const length = allImageSharp.nodes.length - 1
  
  const onNext = () => {
    if(active) return;
    setTimeout(() => {
      photo === length ? setPhoto(0) : setPhoto(photo + 1);
      setActive(false);
    }, 1000);
    setState({ animate: !state.animate, left: true, right: false });
    setActive(true);
  };

  const onPrev = () => {
    if(active) return;
    setTimeout(() => {
      photo === 0 ? setPhoto(length) : setPhoto(photo - 1);
      setActive(false);
    }, 1000);
    setState({ animate: !state.animate, left: false, right: true});
    setActive(true);
  }

  const user = Users.filter(el => el.photo === node.src.slice(node.src.lastIndexOf('/')))[0];

  return(
    <StyledReview>
      <div className='review'>
        <Title text='Review' />
        <i className='review-top' />
          <Box {...state} image={node} {...user} />
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