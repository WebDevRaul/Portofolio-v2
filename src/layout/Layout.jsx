import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import StyledLayout from './Styled_Layout';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <div className='layout'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-1'>
            <Navbar />
          </div>
          <div className='col-12 col-sm-10 mr-auto'>
            {children}
          </div>
        </div>
      </div>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;