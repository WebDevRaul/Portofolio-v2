import React from 'react';
import PropTypes from 'prop-types';
import StyledLayout from './Styled_Layout';
import Navbar from './navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar>
        <main>{children}</main>
      </Navbar>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;