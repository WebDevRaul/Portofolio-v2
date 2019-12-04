import styled from 'styled-components';
import { BgColor, ToLeft, LightWhite, Border } from '../../../layout/index.scss';

const StyledTitle = styled.h5`
  h5 {
    display: flex;
    padding-left: 30px;
    color: ${LightWhite};
    font-weight: 600;
    span {
      padding: 5px 10px;
      background: ${BgColor};
      border-radius: ${Border};
    }
  }
`

export default StyledTitle;