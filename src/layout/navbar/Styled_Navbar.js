import styled from 'styled-components';
import { bootstrap, portrait } from '../../utils/responsive';

const StyledNavbar = styled.nav`
  ul {
    position: relative;
    width: 70px;
    background-color: var(--grey);
    border-radius: var(--border);
    margin: 15px 10px 0 auto;
    z-index: 30;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1px;
      ::after {
        content: '';
        width: 100%;
        height: 1px;
        background: var(--bgToRight);
        z-index: 20;
      }
      :nth-last-child(1) {
        ::after {
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
    ::after {
      content: '';
      display: none;
      width: 100%;
      height: 20px;
      position: absolute;
      bottom: -20px;
      background: var(--black);
      border-top: 1px solid rgba(255, 255, 255, .2);
    }
  }
  @media ${bootstrap.lg} {
    ul {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @media ${bootstrap.sm} {
    ul {
      position: fixed;
      top: 0;
      left: 0;
      transform: none;
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin: 0 0 25px 0;
      border-bottom: 1px solid rgba(255, 255, 255, .2);
      z-index: 100;
      ::after {
        display: block;
      }
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
        div {
          padding: 8px 0;
          span {
            font-size: 1.1em;
          }
        }
      }
    }
  }
`

export default StyledNavbar;