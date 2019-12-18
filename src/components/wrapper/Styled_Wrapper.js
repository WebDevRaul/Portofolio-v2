import styled from 'styled-components';
import { bootstrap } from '../../utils/responsive';

const StyledWrapper = styled.div`
  .mobile-view-top, .mobile-view-card {
    display: flex;
    width: 100%;
  }
  .placeholder {
    display: none;
  }
  @media ${bootstrap.lg} {
    .mobile-view-top, .mobile-view-card {
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
    .mobile-view-top, .mobile-view-card {
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