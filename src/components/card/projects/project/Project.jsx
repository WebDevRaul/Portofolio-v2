import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby";
import Box from './Box.jsx';

import StyledProject from './Styled_Project.js';
const projects = require('./utils/projects.json');

const Project = ({ onOpen }) => {
  const { nodes } = useStaticQuery(image).allFile;
  return (
    <StyledProject>
      <div className='project row no-gutters'>
        {
          nodes.map((node, index) => {
            const project = projects.filter(el => el.photo === node.childImageSharp.fluid.src.slice(node.childImageSharp.fluid.src.lastIndexOf('/')))[0];
            return <Box onOpen={onOpen} key={index} image={node.childImageSharp.fluid} {...project} />
          })
        }
      </div>
    </StyledProject>
  )
}

const image = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "projects"}}) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

Project.propTypes = {
  onOpen: PropTypes.func.isRequired
}

export default Project;