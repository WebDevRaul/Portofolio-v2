import styled from 'styled-components';
import { bootstrap } from '../../utils/responsive';

const StyledNavbar = styled.nav`
  ul {
    width: 70px;
    background-color: var(--grey);
    border-radius: var(--border);
    margin: 15px 10px 0 auto;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1px;
      &::after {
        content: '';
        width: 100%;
        height: 1px;
        background: var(--bgToRight);
        z-index: 20;
      }
      &:nth-last-child(1) {
        &::after {
          background: none;
        }
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 14px 0px;
        transition: var(--transition);
        text-transform: capitalize;
        :hover {
          cursor: pointer;
          color: var(--secondary);
        }
        span {
          font-size: .8em;
          padding-top: 2px;
        }
      }
      .active {
        color: var(--secondary);
      }
    }
  }
  @media ${bootstrap.sm} {
    ul {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin: 0 0 25px 0;
      border-bottom: 1px solid rgba(255, 255, 255, .2);
      li {
        width: 100%;
        border-top: none !important;
        border-bottom: none !important;
        :nth-child(2) {
          border: 1px solid rgba(255, 255, 255, .2);
        }
        :nth-child(3) {
          border-right: 1px solid rgba(255, 255, 255, .2);
        }
        ::after {
          display: none;
        }
      }
    }
  }
`

export default StyledNavbar;