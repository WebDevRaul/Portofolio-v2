import styled from 'styled-components';
import { portrait } from '../../../utils/responsive';

const StyledSpan = styled.div`
  padding: 7px 0 5px 7px;
  width: 50%;
  height: 29px;
  background-color: var(--primary);
  border-radius: var(--border);
  letter-spacing: var(--spacing);
  overflow: hidden;

  @media ${portrait.mobileM} {
    padding: 5px 0 5px 5px !important;
    height: 21px !important;
  }
`

export default StyledSpan;