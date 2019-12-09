import styled from 'styled-components';

const StyledMap = styled.div`
  margin-bottom: 30px;
  h5 {
    position: relative;
    ::after {
      position: absolute;
      content: '';
      bottom: -12.5px;
      left: 10px;
      width: 100%;
      height: 1px;
      background: var(--bgToLeft);
    } 
  }
  .map {
    padding: 10px;
    width: 100%;
    height: 250px;
    div > div {
      border-radius: var(--border);
    }
    .marker {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -100%);
      svg {
        color: var(--primary);
      }
    }
  }
`

export default StyledMap;