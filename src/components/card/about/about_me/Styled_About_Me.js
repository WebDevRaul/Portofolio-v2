import styled from 'styled-components';

const StyledAboutMe = styled.div`
  .about-me {
    margin-bottom: 30px;
    .list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      margin: 5px 10px;
      position: relative;
      p {
        width: 50%;
        text-align: end;
        padding-right: 0px;
      }
    }
    p {
      padding: 10px;
      margin-bottom: 0px;
      color: var(--darkWhite);
      letter-spacing: var(--spacing);
    }
  }
`

export default StyledAboutMe;