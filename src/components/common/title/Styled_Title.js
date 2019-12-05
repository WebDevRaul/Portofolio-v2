import styled from 'styled-components';
import { BgColor, LightWhite, Border } from '../../../layout/index.scss';

const StyledTitle = styled.div`
  h5 {
    display: flex;
    padding-left: 10px;
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