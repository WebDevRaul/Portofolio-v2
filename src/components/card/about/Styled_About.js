import styled from 'styled-components';

const StyledAbout = styled.section`
  .about {
    padding: 30px 10px 30px 18px;
    background-color: var(--grey);
    border-radius: var(--border);
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
      background-color: var(--darkWhite);
      border-radius: 50px;
    }
  }
`

export default StyledAbout;