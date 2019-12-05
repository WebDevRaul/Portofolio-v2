import styled from 'styled-components';
import { bootstrap } from '../../utils/responsive';
import { Secondary, Grey, DarkWhite, Border, ToRight, Transition } from '../index.scss';

const StyledNavbar = styled.nav`
  ul {
    max-width: 70px;
    background-color: ${Grey};
    border-radius: ${Border};
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
        background: ${ToRight};
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
        transition: ${Transition};
        text-transform: capitalize;
        :hover {
          cursor: pointer;
          color: ${Secondary};
        }
        span {
          font-size: .8em;
          padding-top: 2px;
        }
      }
      .active {
        color: ${Secondary};
      }
    }
  }
  @media ${bootstrap.sm} {
    ul {
      display: flex;
      justify-content: space-around;
      max-width: 100%;
      margin: 0 0 25px 0;
      li {
        width: 100%;
        border-top: none !important;
        border-bottom: 1px solid ${DarkWhite};
        :nth-child(2) {
          border: 1px solid ${DarkWhite};
        }
        :nth-child(3) {
          border-right: 1px solid ${DarkWhite};
        }
        ::after {
          display: none;
        }
      }
    }
  }
`

export default StyledNavbar;