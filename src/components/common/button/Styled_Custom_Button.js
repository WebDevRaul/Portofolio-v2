import styled from 'styled-components';
import { Secondary, Spacing, LightWhite, Transition } from '../../../layout/index.scss';

const StyledCustomButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    color: ${LightWhite};
    text-transform: uppercase;
    letter-spacing: ${Spacing};
    :hover {
      transition: ${Transition};
      color: ${Secondary};
    }
  }
`

export default StyledCustomButton;