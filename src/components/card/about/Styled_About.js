import styled from 'styled-components';
import { DarkWhite, Grey, Border } from '../../../layout/index.scss';

const StyledAbout = styled.section`
  .about {
    padding: 30px 10px 30px 18px;
    background-color: ${Grey};
    border-radius: ${Border};
    width: 100%;
    height: 82vh;
    backface-visibility: hidden;
    overflow: hidden;
    overflow-y: scroll;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${DarkWhite};
      border-radius: 50px;
    }
  }
`

export default StyledAbout;