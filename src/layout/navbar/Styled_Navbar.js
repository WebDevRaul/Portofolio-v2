import styled from 'styled-components';
import { bootstrap } from '../../utils/responsive';

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
      border-top: 1px solid var(--borderColor);
    }
  }
  @media ${bootstrap.lg} {
    ul {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      margin: 0px;
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
      border-bottom: 1px solid var(--borderColor);
      z-index: 100;
      ::after {
        display: block;
        background: rgb(200, 235, 195);
      }
      li {
        width: 100%;
        border-top: none !important;
        border-bottom: none !important;
        :nth-child(2), :nth-child(3), :nth-child(4) {
          border: 1px solid var(--borderColor);
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