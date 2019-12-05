import styled from 'styled-components';
import { bootstrap } from '../utils/responsive';

const StyledLayout = styled.main`
  padding: 50px;
  background-color: var(--black);
  color: var(--lightWhite);
  min-height: 100vh;
  
  @media ${bootstrap.sm} {
    padding: 0px;
  }
`

export default StyledLayout;