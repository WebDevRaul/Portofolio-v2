import styled from 'styled-components';
import { bootstrap, portrait } from '../../utils/responsive';

const StyledWrapper = styled.div`
  display: flex;
  .mobile-view-top, .mobile-view-bottom {
    display: flex;
    width: 100%;
  }
  .placeholder {
    display: none;
  }
  @media ${bootstrap.lg} {
    flex-direction: column;
    .mobile-view-top, .mobile-view-bottom {
      display: flex;
      max-width: 550px;
      margin: 0 auto;
    }
    .placeholder {
      padding: 40px;
      display: block;
    }
  }
  @media ${bootstrap.sm} {
    .mobile-view-top, .mobile-view-bottom {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .placeholder {
      display: none;
    }
  }
`

export default StyledWrapper;