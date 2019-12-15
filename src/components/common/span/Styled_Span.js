import styled from 'styled-components';
import { portrait, bootstrap } from '../../../utils/responsive';

const StyledSpan = styled.div`
  padding: 10px;
  width: 50%;
  background-color: var(--primary);
  border-radius: var(--border);
  letter-spacing: var(--spacing);
  overflow: hidden;

  @media ${bootstrap.lg} {
    padding: 5px 0 0 5px;
    height: 27px;
  }
  @media ${bootstrap.sm} {
    padding: 5px 0 0 5px;
    height: 25px;
  }
  @media ${portrait.mobileL} {
    padding: 5px 0 0 5px;
    height: 23px;
  }
`

export default StyledSpan;