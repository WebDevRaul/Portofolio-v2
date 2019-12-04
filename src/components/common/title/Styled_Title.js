import styled from 'styled-components';
import { BgColor, ToLeft, LightWhite, Border } from '../../../layout/index.scss';

const StyledTitle = styled.div`
  h5 {
    display: flex;
    margin-bottom: 30px;
    padding-left: 30px;
    color: ${LightWhite};
    span {
      padding: 5px 10px;
      background: ${BgColor};
      border-radius: ${Border};
    }
  }
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: ${ToLeft};
  }
`

export default StyledTitle;