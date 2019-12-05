import styled from 'styled-components';

const StyledBckground = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  border-radius: var(--border);
  overflow: hidden;
  z-index: -10;
  .wrapper {
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    .background {
      display: block;
      width: 100%;
      height: 315px;
      ::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100px;
        bottom: -80px;
        left: -40px;
        transform: rotate(10deg);
        background: var(--grey);
      }
      ::before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100px;
        bottom: -80px;
        right: -40px;
        transform: rotate(-10deg);
        background: var(--grey);
      }
    }
  }
`

export default StyledBckground;