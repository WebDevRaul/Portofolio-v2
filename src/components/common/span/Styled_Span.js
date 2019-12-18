import styled from 'styled-components';
import { portrait, bootstrap } from '../../../utils/responsive';

const StyledSpan = styled.div`
  padding: 10px;
  width: 50%;
  height: 38.75px;
  background-color: var(--primary);
  border-radius: var(--border);
  letter-spacing: var(--spacing);
  overflow: hidden;

  @media ${portrait.laptop} {
    height: 35px;
  }
  @media ${bootstrap.sm} {
    padding: 8px;
    height: 31px;
  }
  @media ${portrait.mobileL} {
    padding: 7px;
    height: 27px;
  }
  @media ${portrait.mobileM} {
    height: 25px;
  }
`

export default StyledSpan;