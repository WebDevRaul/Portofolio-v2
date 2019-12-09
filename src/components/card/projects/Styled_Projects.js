import styled from 'styled-components';
import { portrait, bootstrap } from '../../../utils/responsive';

const StyledProjects = styled.section`
  position: relative;
  .top, .bottom {
    width: 100%;
    height: 20px;
    display: block;
    background: var(--grey);
    border-radius: var(--border);
    position: sticky;
    z-index: 20;
  }
  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
  }
  .zIndex {
    z-index: 10
  }
  .projects {
    position: absolute;
    bottom: 0;
    height: 82vh;
    width: 100%;
    padding: 0 10px 0 18px;
    background-color: var(--grey);
    border-radius: var(--border);
    backface-visibility: hidden;
    overflow: hidden;
    overflow-y: scroll;
    overflow: auto;
  }
  .scroll {
    overflow: hidden;
  }

  @media ${bootstrap.lg} {
    .projects {
      height: 100%;
      overflow: unset;
      overflow-y: unset;
      padding: 0 50px;
    }
    .slideInRight, .slideOutRight {
      animation: unset;
      transform: translateX(0);
      -webkit-transform: translateX(0%);
      -moz-transform: translateX(0%);
      -ms-transform: translateX(0%);
      -o-transform: translateX(0%);
    }
  }
  @media ${portrait.tablet} {
    .projects {
      padding: 0 25px;
    }
  }
  @media ${bootstrap.sm} {
    .projects {
      padding: 0px;
    }
  }
`

export default StyledProjects;