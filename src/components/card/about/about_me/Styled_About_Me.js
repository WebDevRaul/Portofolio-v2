import styled from 'styled-components';
import { DarkWhite, Spacing, ToLeft, ToRight } from '../../../../layout/index.scss';

const StyledAboutMe = styled.div`
  .about-me {
    .list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      margin: 10px 0;
      position: relative;
      ::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        width: 50%;
        height: 1px;
        background: ${ToRight};
      }
      ::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 50%;
        height: 1px;
        background: ${ToLeft};
      }
      :nth-last-child(1) {
        ::after, ::before {
          display: none;
        }
      }
    }
    p {
      color: ${DarkWhite};
      letter-spacing: ${Spacing}
    }
  }
`

export default StyledAboutMe;