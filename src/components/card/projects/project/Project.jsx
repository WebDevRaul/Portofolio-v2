import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby";
import Box from './Box.jsx';

import StyledProject from './Styled_Project.js';
const projects = require('./utils/projects.json');

const Project = ({ show, setShow }) => {
  const { nodes } = useStaticQuery(image).allImageSharp;
  return (
    <StyledProject>
      <div className='project row no-gutters'>
        {
          nodes.map((node, index) => {
            const project = projects.filter(el => el.photo === node.fixed.src.slice(node.fixed.src.lastIndexOf('/')))[0];
            return <Box key={index} image={node.fixed} {...project} show={show} setShow={setShow} />
          })
        }
      </div>
    </StyledProject>
  )
}

Project.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired
}

const image = graphql`
  query {
    allImageSharp {
      nodes {
        fixed(height: 170, width: 170) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Project;