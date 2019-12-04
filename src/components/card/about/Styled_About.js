import styled from 'styled-components';
import { DarkWhite, Grey, Border } from '../../../layout/index.scss';

const StyledAbout = styled.section`
  .about {
    position: absolute;
    top: 0;
    padding: 30px 0;
    background-color: ${Grey};
    border-radius: ${Border};
    width: 100%;
    height: 82vh;
    overflow: hidden;
    overflow-y: scroll;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 15px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${DarkWhite};
      border-radius: 50px;
    }
  }
`

export default StyledAbout;