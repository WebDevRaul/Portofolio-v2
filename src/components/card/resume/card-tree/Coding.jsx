import React from 'react';
import ToRight from '../../../common/content/To_Right';
import ToLeft from '../../../common/content/To_Left';
import CodeIcon from '@material-ui/icons/Code';
import { Html, Css, Javascript, ReactJs, JQuery, Redux, NodeJs, MongoDB, PostgreSQL, Sass, Bootstrap, GraphQl, Github, Gatsby } from '../../../../svg/bundle';
import Logo from './Logo';

const Coding = () => (
  <div className='coding'>
    <h5><CodeIcon /> Coding</h5>
    <ToRight width={50} isClass='right' />
    <ToLeft width={50} isClass='left' />
    <div className='box'>
      <div className='row no-gutters'>
        <div className='col-6'>
          <Logo logo={<Html width='25px' height='25px' />} text='Html' />
          <Logo logo={<Javascript width='25px' height='25px' />} text='Javascript' />
          <Logo logo={<ReactJs width='25px' height='25px' />} text='React Js' />
          <Logo logo={<JQuery width='25px' height='25px' />} text='JQuery' />
          <Logo logo={<NodeJs width='40px' height='40px' />} text='Node Js' />
          <Logo logo={<MongoDB width='60px' height='60px' />} text='Mongo DB' />
          <Logo logo={<PostgreSQL width='25px' height='25px' />} text='Postgre SQL' />
        </div>
        <div className='col-6'>
          <Logo logo={<Gatsby width='50px' height='50px' />} text='Gatsby' />
          <Logo logo={<GraphQl width='25px' height='25px' />} text='Graph Ql' />
          <Logo logo={<Redux width='25px' height='25px' />} text='Redux' />
          <Logo logo={<Css width='25px' height='25px' />} text='Css' />
          <Logo logo={<Sass width='25px' height='25px' />} text='Sass' />
          <Logo logo={<Bootstrap width='25px' height='25px' />} text='Bootstrap' />
          <Logo logo={<Github width='25px' height='25px' />} text='GitHub' />
        </div>
      </div>
    </div>
  </div>
)

export default Coding;