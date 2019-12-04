import styled from 'styled-components';
import { BgColor, ToLeft, LightWhite, Border } from '../../../layout/index.scss';

const StyledTitle = styled.h5`
  h5 {
    display: flex;
    margin-bottom: 24px;
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
    height: 1px;
    background: ${ToLeft};
  }
`

export default StyledTitle;