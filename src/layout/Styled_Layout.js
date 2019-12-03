import styled from 'styled-components';
import { bootstrap } from '../utils/responsive';
import { Black, LightWhite } from './index.scss';

const StyledLayout = styled.main`
  padding: 50px;
  background-color: ${Black};
  color: ${LightWhite};
  min-height: 100vh;
  
  @media ${bootstrap.sm} {
    padding: 0px;
  }
`

export default StyledLayout;