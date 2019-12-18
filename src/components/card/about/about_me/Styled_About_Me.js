import styled from 'styled-components';
import { bootstrap } from '../../../../utils/responsive';

const StyledAboutMe = styled.div`
  .about-me {
    margin-bottom: 30px;
    padding-top: 20px;
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
  @media ${bootstrap.sm} {
    .about-me {
      .list {
        margin: 0 10px;
      }
    }
  }
`

export default StyledAboutMe;