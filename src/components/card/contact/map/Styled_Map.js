import styled from 'styled-components';

const StyledMap = styled.div`
  margin-bottom: 30px;
  padding: 10px;
  h5 {
    padding: 0px;
  }
  .map {
    padding: 15px 0;
    width: 100%;
    height: 260px;
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