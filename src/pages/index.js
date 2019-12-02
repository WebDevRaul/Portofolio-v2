import React from "react";

import SEO from "../utils/seo";
import Layout from "../layout/Layout";
import Card from "../components/card/Card";
import Profile from "../components/profile/Profile";
import Navbar from "../layout/navbar/Navbar";

const IndexPage = () => (
  <Layout>
    <SEO title="Savin" />
    <div className='row no-gutters'>
      <div className='col-12 col-lg-6'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-2'>
            <Navbar />
          </div>
          <div className='col-12 col-sm-10'>
            <Profile />
          </div>
        </div>
      </div>
      <div className='col-12 col-lg-6'>
        <Card />
      </div>
    </div>
  </Layout>
)

export default IndexPage;