import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Box from './Box.jsx';

import StyledProject from './Styled_Project.js';
const projects = require('./utils/projects.json');

const Project = () => {
  const { nodes } = useStaticQuery(image).allImageSharp;
  return (
    <StyledProject>
      <div className='project row no-gutters'>
        {
          nodes.map((node, index) => {
            const project = projects.filter(el => el.photo === node.fluid.src.slice(node.fluid.src.lastIndexOf('/')))[0];
            return <Box key={index} image={node.fluid} {...project} />
          })
        }
      </div>
    </StyledProject>
  )
}

const image = graphql`
  query {
    allImageSharp {
      nodes {
        fluid(maxWidth: 600, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Project;