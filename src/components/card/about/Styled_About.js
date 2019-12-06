import styled from 'styled-components';

const StyledAbout = styled.section`
  position: relative;
  .top, .bottom {
    width: 100%;
    height: 20px;
    display: block;
    background: var(--grey);
    position: sticky;
    z-index: 20;
  }
  .top {
    top: 0;
  }
  .bottom {
    bottom: 0;
  }
  .about {
    padding: 0 10px 0 18px;
    background-color: var(--grey);
    border-radius: var(--border);
    width: 100%;
    height: 80vh;
    backface-visibility: hidden;
    overflow: hidden;
    overflow-y: scroll;
    overflow: auto;
  }
`

export default StyledAbout;